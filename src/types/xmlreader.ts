import { notImplemented, notSupported } from "../misc/helpers";
import { XMLErrorCodes as ErrorCodes } from "./xmlcommon";

enum GXNodeType {
  element = 1,
  endTag = 2,
  text = 4,
  comment = 8,
  whiteSpace = 16,
  cdata = 32,
  processingInstruction = 64,
  documentType = 128
}

export class XMLReader {
  // Internal variables

  private document: Document = null;

  private currentNodeInfo = {
    node: null,
    gxType: null
  };

  // Properties

  /**
   * Returns the error code for the last operation.
   */
  private mErrCode: number;
  get errCode(): number {
    return this.mErrCode;
  }

  /**
   * Returns the error description for the last operation.
   */
  private mErrDescription: string;
  get errDescription(): string {
    return this.mErrDescription;
  }

  /**
   * Returns the name of the current element
   */
  get name(): string {
    return this.currentNodeInfo.node ? this.currentNodeInfo.node.nodeName : "";
  }

  /**
   * Returns the value of the current element
   */
  get value(): string {
    return this.isSingleElementNode(this.currentNodeInfo.node)
      ? this.currentNodeInfo.node.textContent
      : "";
  }

  /**
   * Returns the current node type obtained through the method Read or ReadType
   */
  get nodeType(): number {
    return this.currentNodeInfo.gxType;
  }

  /**
   * Indicates whether the end of the document was reached
   */
  private mEOF: boolean;
  get eOF(): number {
    return this.mEOF ? 1 : 0;
  }

  /**
   * Indicates whether the current node obtained through the Read or ReadType method is simple
   */
  get isSimple(): number {
    return this.isSingleElementNode(this.currentNodeInfo.node) ? 1 : 0;
  }

  /**
   * Returns the element's the namespace if it exists
   */
  get prefix(): string {
    let prefix = "";
    let components = this.name.split(":");
    if (components.length === 2) {
      prefix = components[0];
    }
    return prefix;
  }

  /**
   * Returns the name that represents the namespace, without indicating the prefix
   */
  get localName(): string {
    let localName = "";
    let components = this.name.split(":");
    if (components.length === 2) {
      localName = components[1];
    } else {
      localName = components[0];
    }
    return localName;
  }

  /**
   *
   */
  private mSimpleElements: number = 1;
  get simpleElements(): number {
    return this.mSimpleElements;
  }
  set simpleElements(value: number) {
    this.mSimpleElements = value;
  }

  // Properties for node type constants

  /**
   *
   */
  get elementType(): number {
    return GXNodeType.element;
  }

  /**
   *
   */
  get endTagType(): number {
    return GXNodeType.endTag;
  }

  /**
   *
   */
  get textType(): number {
    return GXNodeType.text;
  }

  /**
   *
   */
  get commentType(): number {
    return GXNodeType.comment;
  }

  /**
   *
   */
  get whiteSpaceType(): number {
    return GXNodeType.whiteSpace;
  }

  /**
   *
   */
  get cDataType(): number {
    return GXNodeType.cdata;
  }

  /**
   *
   */
  get processingInstructionType(): number {
    return GXNodeType.processingInstruction;
  }

  /**
   *
   */
  get doctypeType(): number {
    return GXNodeType.documentType;
  }

  // Opening documents

  /**
   * Reads the XML document from the given string source
   * @param {string} source
   * @return number
   */
  openFromString(source: string): number {
    this.resetDocument();
    this.resetErrors();
    const parser = new DOMParser();
    const hasError = false;
    const doc = parser.parseFromString(source, "application/xml");
    if (doc.documentElement.tagName === "parsererror") {
      this.mErrCode = ErrorCodes.open_file;
      this.mErrDescription = doc.documentElement.innerText;
    }
    this.document = hasError ? null : doc;
    this.mEOF = hasError;
    return 0;
  }

  /**
   * Closes the current reading session
   * @return {number}
   */
  close(): number {
    this.resetDocument();
    return 0;
  }

  // Reading

  /**
   * Used to obtain the different nodes of the open file, in a sequential manner.
   * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
   */
  read(): number {
    if (!this.document) {
      this.mErrCode = ErrorCodes.no_open_document;
      this.mErrDescription = "No open document";
    } else if (!this.currentNodeInfo.node) {
      if (!this.eOF) {
        this.setCurrentNode(this.document.documentElement);
      }
    } else {
      const node = this.currentNodeInfo.node;
      const gxType = this.currentNodeInfo.gxType;
      if (
        gxType !== GXNodeType.endTag &&
        node.childNodes.length > 0 &&
        (!this.isSingleElementNode(node) || !this.simpleElements)
      ) {
        this.setCurrentNode(node.firstChild);
      } else if (node.nextSibling) {
        this.setCurrentNode(node.nextSibling);
      } else if (
        node.parentNode &&
        node.parentNode.nodeType !== 9 /* Document */
      ) {
        this.setCurrentNode(node.parentNode, GXNodeType.endTag);
      } else {
        this.setCurrentNode(null);
      }
    }

    return this.currentNodeInfo.node ? 1 : 0;
  }

  /**
   * Moves forward to the following node, but only if constraints established are fulfilled
   * @param {number} nodeType Node types to consider
   * @param {string} name (Optional) Specifies the value for the name of the node to be read, as long as the node is Element or EndTag type
   * @return {number} If a node is read, the value returned is greater than zero. Otherwise it returns zero.
   */
  readType(nodeType: number, name: string = undefined): number {
    let ret = this.read();
    while (ret > 0) {
      const currType: number = this.currentNodeInfo.gxType;
      if ((nodeType & currType) === currType && (!name || this.name === name)) {
        break;
      }
      ret = this.read();
    }
    return ret;
  }

  /**
   * Allows obtaining flat XML text from the start of an element.
   * @return {string} The XML corresponding to the current node
   */
  readRawXML(): string {
    let xml = "";
    if (this.currentNodeInfo.gxType === GXNodeType.element) {
      xml = this.currentNodeInfo.node.outerHTML;
      this.skip();
    }
    return xml;
  }

  /**
   * Allows skipping a full element with all its children/sons.
   * It is valid only for nodes of the Element type.
   * @return {number}
   */
  skip(): number {
    if (this.currentNodeInfo.gxType === GXNodeType.element) {
      const node = this.currentNodeInfo.node;
      if (node.nextSibling) {
        this.setCurrentNode(node.nextSibling);
      } else if (
        node.parentNode &&
        node.parentNode.nodeType !== 9 /* Document */
      ) {
        this.setCurrentNode(node.parentNode, GXNodeType.endTag);
      } else {
        this.setCurrentNode(null);
      }
    }
    return this.currentNodeInfo.node ? 1 : 0;
  }

  // Attributes

  /**
   * Returns the number of attributes in the current node, obtained through the Read or ReadType methods
   */
  get attributeCount(): number {
    const atts = this.getCurrentNodeAttributesList();
    return atts.length;
  }

  /**
   * Returns the value of an attribute of the current node indicated by its name
   * @param {string} name The attribute's name
   * @return {string} The attribute's value in the current node
   */
  getAttributeByName(name: string): string {
    const atts = this.getCurrentNodeAttributesList();
    for (const att of atts) {
      if (att.nodeName === name) {
        return att.nodeValue;
      }
    }
    return "";
  }

  /**
   * Returns the value of an attribute of the current node indicated by its index
   * @param {number} index The search index
   * @return {string} The attribute's value in the current node
   */
  getAttributeByIndex(index: number): string {
    const atts = this.getCurrentNodeAttributesList();
    if (index >= 0 && index < atts.length) {
      return atts[index].nodeValue;
    }
    return "";
  }

  /**
   * Indicates if there is an attribute with the given name in the current node
   * @param {string} name The name of the attribute
   * @return {number} 1 if the attribute exists, 0 otherwise
   */
  existsAttribute(name: any): number {
    const atts = this.getCurrentNodeAttributesList();
    for (const att of atts) {
      if (att.nodeName === name) {
        return 1;
      }
    }
    return 0;
  }

  /**
   * Returns the full name, including the namespace if it exists
   * @param {number} index
   * @return string
   */
  getAttributeName(index: number): string {
    const atts = this.getCurrentNodeAttributesList();
    if (index >= 0 && index < atts.length) {
      return atts[index].nodeName;
    }
    return "";
  }

  /**
   * Returns the attribute's the namespace if it exists
   * @param {number} index
   * @return string
   */
  getAttributePrefix(index: number): string {
    const attName = this.getAttributeName(index);
    let prefix = "";
    if (attName !== "") {
      const components = attName.split(":");
      if (components.length === 2) {
        prefix = components[0];
      }
    }
    return prefix;
  }

  /**
   * Returns the name of the attribute, excluding the namespace if it exists
   * @param {number} index
   * @return string
   */
  getAttributeLocalName(index: number): string {
    const attName = this.getAttributeName(index);
    let localName = "";
    if (attName !== "") {
      const components = attName.split(":");
      localName = components.length === 2 ? components[1] : attName;
    }
    return localName;
  }

  // Private methods

  private resetErrors() {
    this.mErrCode = ErrorCodes.no_error;
    this.mErrDescription = "";
  }

  private resetDocument() {
    this.document = null;
    this.currentNodeInfo.node = null;
    this.currentNodeInfo.gxType = null;
    this.mEOF = true;
  }

  private isSingleElementNode(node: Node): boolean {
    return (
      node &&
      node.nodeType === 1 &&
      node.childNodes.length === 1 &&
      node.firstChild.childNodes.length === 0
    );
  }

  private nodeTypeToGXNodeType(type: number): GXNodeType {
    switch (type) {
      case 1: // Element
        return GXNodeType.element;
      case 3: // Text
        return GXNodeType.text;
      case 4: // CDATA
        return GXNodeType.cdata;
      case 7: // ProcessingInstruction
        return GXNodeType.processingInstruction;
      case 8: // Comment
        return GXNodeType.comment;
      case 10: // DocumentType
        return GXNodeType.documentType;
      case 2: // Attr
      case 5: // EntityReference
      case 6: // Entity
      case 9: // Document
      case 11: // DocumentFragment
      case 12: // Notation
      default:
        return undefined;
    }
  }

  private setCurrentNode(node: Node, gxNodeType: GXNodeType = undefined) {
    this.currentNodeInfo.node = node;
    if (node) {
      this.currentNodeInfo.gxType = gxNodeType
        ? gxNodeType
        : this.nodeTypeToGXNodeType(node.nodeType);
    } else {
      this.currentNodeInfo.gxType = null;
    }
    this.setEOFForCurrentNode();
  }

  private getCurrentNodeAttributesList(): Node[] {
    const element = this.currentNodeInfo.node as Element;
    if (!element) {
      return null;
    }
    return Array.from(element.attributes);
  }

  setEOFForCurrentNode() {
    const node = this.currentNodeInfo.node;
    if (node === null) {
      this.mEOF = true;
    } else {
      const gxType = this.currentNodeInfo.gxType;
      if (
        (gxType !== GXNodeType.endTag && node.childNodes.length > 0) ||
        node.nextSibling ||
        (node.parentNode && node.parentNode.nodeType !== 9) /* Document */
      ) {
        this.mEOF = false;
      } else {
        this.mEOF = true;
      }
    }
  }

  // Not (yet) supported

  /**
   * @param {string} file
   * @return number
   */
  open(file: string): number {
    notSupported();
    return null;
  }

  // ===========================
  // To check
  // ===========================

  /**
   * @param request
   * @return any
   */
  openRequest(request: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param client
   * @return any
   */
  openResponse(client: any): any {
    notImplemented();
    return null;
  }

  /**
   * Returns the URI of the namespace if it exists
   * @param {number} index
   * @return string
   */
  getAttributeURI(index: number): string {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttEntityValueByIndex(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @return any
   */
  getAttEntityValueByName(name: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttEntityNotationByIndex(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @return any
   */
  getAttEntityNotationByName(name: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param encoding
   * @return any
   */
  setDocEncoding(encoding: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param encoding
   * @return any
   */
  setNodeEncoding(encoding: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param uri
   * @param namespace
   * @return any
   */
  addSchema(uri: any, namespace: any): any {
    notImplemented();
    return null;
  }

  /**
   *
   */
  private merrLineNumber: number;
  get errLineNumber(): number {
    return this.merrLineNumber;
  }

  /**
   *
   */
  private merrLinePos: number;
  get errLinePos(): number {
    return this.merrLinePos;
  }

  /**
   *
   */
  private mnameSpaceURI: any;
  get nameSpaceURI(): any {
    return this.mnameSpaceURI;
  }

  /**
   *
   */
  private mreadExternalEntities: number;
  get readExternalEntities(): number {
    return this.mreadExternalEntities;
  }
  set readExternalEntities(value: number) {
    this.mreadExternalEntities = value;
  }

  /**
   *
   */
  private mremoveWhiteSpaces: number;
  get removeWhiteSpaces(): number {
    return this.mremoveWhiteSpaces;
  }
  set removeWhiteSpaces(value: number) {
    this.mremoveWhiteSpaces = value;
  }

  /**
   *
   */
  private mremoveWhiteNodes: number;
  get removeWhiteNodes(): number {
    return this.mremoveWhiteNodes;
  }
  set removeWhiteNodes(value: number) {
    this.mremoveWhiteNodes = value;
  }

  /**
   *
   */
  private mlinesNormalization: number;
  get linesNormalization(): number {
    return this.mlinesNormalization;
  }
  set linesNormalization(value: number) {
    this.mlinesNormalization = value;
  }

  /**
   *
   */
  private mstopOnInvalid: number;
  get stopOnInvalid(): number {
    return this.mstopOnInvalid;
  }
  set stopOnInvalid(value: number) {
    this.mstopOnInvalid = value;
  }

  /**
   *
   */
  private mvalidationType: number;
  get validationType(): number {
    return this.mvalidationType;
  }
  set validationType(value: number) {
    this.mvalidationType = value;
  }
}
