import { notImplemented, notSupported } from "../misc/helpers";
import { XMLBase, XMLErrorCodes as ErrorCodes } from "./xmlcommon";

export class XMLWriter extends XMLBase {
  private static XMLWriterElementStack = class {
    private elements: Element[];

    constructor() {
      this.elements = new Array<Element>();
    }

    push(elem: Element) {
      this.elements.push(elem);
    }

    pop(): Element {
      return this.elements.length > 0 ? this.elements.pop() : undefined;
    }

    top(): Element {
      return this.elements.length > 0
        ? this.elements[this.elements.length - 1]
        : undefined;
    }
  };

  // Internal variables

  private document: Document = null;

  private elemStack = new XMLWriter.XMLWriterElementStack();

  // Properties

  /**
   * Allows to inquire the value of the XML document that is in the internal buffer
   * when the document was created with the OpenToString() method
   */
  get resultingString(): string {
    return this.document.firstElementChild.outerHTML;
  }

  // Opening documents

  /**
   * Allows the creation of an XML document by an internal buffer instead of a file
   * @return {number}
   */
  openToString(): any {
    this.document = document.implementation.createDocument("", "", null);
    this.elemStack = new XMLWriter.XMLWriterElementStack();
    this.resetErrors();
    return 0;
  }

  /**
   * Closes the current writing session
   * @return {number}
   */
  close(): number {
    this.document = null;
    this.elemStack = null;
    return 0;
  }

  // Writing

  /**
   * Writes an element with the indicated value
   * @param {string} name Element's name
   * @param {string} value Element's value
   * @return {number}
   */
  writeElement(name: string, value: string): number {
    if (this.errCode === 0) {
      this.writeStartElement(name);
    }
    if (this.errCode === 0) {
      this.writeText(value);
      this.writeEndElement();
    }
    return this.errCode;
  }

  /**
   * Starts a compound element
   * @param {string} name Element's name
   * @return {number}
   */
  writeStartElement(name: string): number {
    if (this.errCode === 0) {
      if (this.document) {
        let elem = this.document.createElement(name);
        this.elemStack.push(elem);
      } else {
        this.mErrCode = ErrorCodes.no_open_document;
        this.mErrDescription = "No open document";
      }
    }
    return this.mErrCode;
  }

  /**
   * Closes the last element that was opened using the WriteStartElement method
   * @return {number}
   */
  writeEndElement(): number {
    if (this.errCode === 0) {
      let elem = this.elemStack.pop();
      if (elem) {
        let parent = this.elemStack.top() || this.document;
        parent.appendChild(elem);
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  }

  /**
   * Generates character data with the indicated value string
   * @param {string} text
   * @return {number}
   */
  writeText(text: string): number {
    if (this.errCode === 0) {
      let elem = this.elemStack.top();
      if (elem) {
        let textElem = this.document.createTextNode(text);
        elem.appendChild(textElem);
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  }

  /**
   * Creates an attribute in the current element
   * @param {string} name Attribute's name
   * @param {string} value Attribute's value
   * @return {number}
   */
  writeAttribute(name: string, value: string): number {
    if (this.errCode === 0) {
      let elem = this.elemStack.top();
      if (elem) {
        elem.setAttribute(name, value);
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  }

  /**
   * Generates any text without replacing special characters with character sequences
   * @param {string} text Text to append
   * @return {number}
   */
  writeRawText(text: any): any {
    if (this.errCode === 0) {
      let elem = this.elemStack.top() || this.document;
      if (elem) {
        let xml = new DOMParser().parseFromString(text, "application/xml");
        if (xml.documentElement.nodeName === "parsererror") {
          console.log(xml);
          this.mErrCode = ErrorCodes.unknown_error;
          this.mErrDescription = xml.documentElement.firstChild.nodeValue;
        } else {
          elem.appendChild(xml.documentElement);
        }
      } else {
        this.mErrCode = ErrorCodes.missing_start_element;
        this.mErrDescription = "Missing start element";
      }
    }
    return this.errCode;
  }

  // Private methods

  private resetErrors() {
    this.mErrCode = ErrorCodes.no_error;
    this.mErrDescription = "";
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
   * @param client
   * @return any
   */
  openRequest(client: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param response
   * @return any
   */
  openResponse(response: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param comment
   * @return any
   */
  writeComment(comment: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param entity
   * @return any
   */
  writeEntityReference(entity: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param cData
   * @return any
   */
  writeCData(cData: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param target
   * @param value
   * @return any
   */
  writeProcessingInstruction(target: any, value: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param encoding
   * @param standalone
   * @return any
   */
  writeStartDocument(encoding: any, standalone: boolean): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @param subset
   * @return any
   */
  writeDocType(name: any, subset: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @param uri
   * @param subset
   * @return any
   */
  writeDocTypeSystem(name: any, uri: any, subset: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @param pubId
   * @param uri
   * @param subset
   * @return any
   */
  writeDocTypePublic(name: any, pubId: any, uri: any, subset: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param localName
   * @param prefix
   * @param nameSpaceURI
   * @return any
   */
  writeNSStartElement(localName: any, prefix: any, nameSpaceURI: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param localName
   * @param nameSpaceURI
   * @param value
   * @return any
   */
  writeNSElement(localName: any, nameSpaceURI: any, value: any): any {
    notImplemented();
    return null;
  }

  /**
   *
   */
  private mindentation: number;
  get indentation(): number {
    return this.mindentation;
  }
  set indentation(value: number) {
    this.mindentation = value;
  }

  /**
   *
   */
  private mindentChar: any;
  get indentChar(): any {
    return this.mindentChar;
  }
  set indentChar(value: any) {
    this.mindentChar = value;
  }
}
