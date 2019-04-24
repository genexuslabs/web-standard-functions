import { notImplemented, notSupported } from "../misc/helpers";

enum ErrorCodes {
  no_error = 0,
  open_file = 1,
  no_open_document = 2
}

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
  private mErrDescription: any;
  get errDescription(): any {
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
      this.setCurrentNode(this.document.documentElement);
    } else {
      const node = this.currentNodeInfo.node;
      const gxType = this.currentNodeInfo.gxType;
      if (
        gxType !== GXNodeType.endTag &&
        node.childNodes.length > 0 &&
        !this.isSingleElementNode(node)
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
    return 0;
  }

  // Attributes

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

  // Private methods

  private resetErrors() {
    this.mErrCode = ErrorCodes.no_error;
    this.mErrDescription = "";
  }

  private resetDocument() {
    this.document = null;
    this.currentNodeInfo.node = null;
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
    }
  }

  private getCurrentNodeAttributesList(): Node[] {
    const element = this.currentNodeInfo.node as Element;
    if (!element) {
      return null;
    }
    return Array.from(element.attributes);
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
   * @return any
   */
  readRawXML(): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttributeName(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttributePrefix(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttributeLocalName(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttributeURI(index: number): any {
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
  private mattributeCount: number;
  get attributeCount(): number {
    return this.mattributeCount;
  }
  set attributeCount(value: number) {
    this.mattributeCount = value;
  }

  /**
   *
   */
  private merrLineNumber: number;
  get errLineNumber(): number {
    return this.merrLineNumber;
  }
  set errLineNumber(value: number) {
    this.merrLineNumber = value;
  }

  /**
   *
   */
  private merrLinePos: number;
  get errLinePos(): number {
    return this.merrLinePos;
  }
  set errLinePos(value: number) {
    this.merrLinePos = value;
  }

  /**
   *
   */
  private meOF: number;
  get eOF(): number {
    return this.meOF;
  }
  set eOF(value: number) {
    this.meOF = value;
  }

  /**
   *
   */
  private misSimple: number;
  get isSimple(): number {
    return this.misSimple;
  }
  set isSimple(value: number) {
    this.misSimple = value;
  }

  /**
   *
   */
  private mprefix: any;
  get prefix(): any {
    return this.mprefix;
  }
  set prefix(value: any) {
    this.mprefix = value;
  }

  /**
   *
   */
  private mlocalName: any;
  get localName(): any {
    return this.mlocalName;
  }
  set localName(value: any) {
    this.mlocalName = value;
  }

  /**
   *
   */
  private mnameSpaceURI: any;
  get nameSpaceURI(): any {
    return this.mnameSpaceURI;
  }
  set nameSpaceURI(value: any) {
    this.mnameSpaceURI = value;
  }

  /**
   *
   */
  private melementType: number;
  get elementType(): number {
    return this.melementType;
  }
  set elementType(value: number) {
    this.melementType = value;
  }

  /**
   *
   */
  private mendTagType: number;
  get endTagType(): number {
    return this.mendTagType;
  }
  set endTagType(value: number) {
    this.mendTagType = value;
  }

  /**
   *
   */
  private mtextType: number;
  get textType(): number {
    return this.mtextType;
  }
  set textType(value: number) {
    this.mtextType = value;
  }

  /**
   *
   */
  private mcommentType: number;
  get commentType(): number {
    return this.mcommentType;
  }
  set commentType(value: number) {
    this.mcommentType = value;
  }

  /**
   *
   */
  private mwhiteSpaceType: number;
  get whiteSpaceType(): number {
    return this.mwhiteSpaceType;
  }
  set whiteSpaceType(value: number) {
    this.mwhiteSpaceType = value;
  }

  /**
   *
   */
  private mcDataType: number;
  get cDataType(): number {
    return this.mcDataType;
  }
  set cDataType(value: number) {
    this.mcDataType = value;
  }

  /**
   *
   */
  private mprocessingInstructionType: number;
  get processingInstructionType(): number {
    return this.mprocessingInstructionType;
  }
  set processingInstructionType(value: number) {
    this.mprocessingInstructionType = value;
  }

  /**
   *
   */
  private mdoctypeType: number;
  get doctypeType(): number {
    return this.mdoctypeType;
  }
  set doctypeType(value: number) {
    this.mdoctypeType = value;
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
  private msimpleElements: number;
  get simpleElements(): number {
    return this.msimpleElements;
  }
  set simpleElements(value: number) {
    this.msimpleElements = value;
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
