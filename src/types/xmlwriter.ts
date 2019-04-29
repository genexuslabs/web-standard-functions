import { notImplemented, notSupported } from "../misc/helpers";
import { XMLErrorCodes as ErrorCodes } from "./xmlcommon";

export class XMLWriter {
  // Internal variables

  private document: Document = null;

  private currentElement: Element = null;

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
   * Allows to inquire the value of the XML document that is in the internal buffer
   * when the document was created with the OpenToString() method
   */
  get resultingString(): string {
    console.log(this.document);
    console.log(this.document.firstElementChild);
    return this.document.firstElementChild.outerHTML;
  }

  // Opening documents

  /**
   * Allows the creation of an XML document by an internal buffer instead of a file
   * @return {number}
   */
  openToString(): any {
    this.document = document.implementation.createDocument("", "", null);
    this.resetErrors();
    return 0;
  }

  /**
   * Closes the current writing session
   * @return {number}
   */
  close(): number {
    this.document = null;
    this.currentElement = null;
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
    if (this.document) {
      let elem = this.document.createElement(name);
      let text = this.document.createTextNode(value);
      elem.appendChild(text);
      this.document.appendChild(elem);
    }
    return 0;
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
   * @param name
   * @return any
   */
  writeStartElement(name: any): any {
    notImplemented();
    return null;
  }

  /**
   * @return any
   */
  writeEndElement(): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @param value
   * @return any
   */
  writeAttribute(name: any, value: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param text
   * @return any
   */
  writeText(text: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param text
   * @return any
   */
  writeRawText(text: any): any {
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
