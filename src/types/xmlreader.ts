import { notImplemented, notSupported } from "../misc/helpers";

const ErrorCodes = {
  no_error: 0,
  open_file: 1
};

export class XMLReader {
  // Internal variables

  private document: Document = null;

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

  // Opening documents

  /**
   * @param {string} file
   * @return number
   */
  open(file: string): number {
    notSupported();
    return null;
  }

  /**
   * Reads the XML document from the given string source
   * @param {string} source
   * @return number
   */
  openFromString(source: string): number {
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

  // Private methods

  private resetErrors() {
    this.mErrCode = ErrorCodes.no_error;
    this.mErrDescription = "";
  }

  // ===========================
  // To check
  // ===========================

  /**
   * @return number
   */
  read(): number {
    notImplemented();
    return null;
  }

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
   * @param nodeType
   * @param name
   * @return number
   */
  readType(nodeType: number, name: any): number {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @return any
   */
  getAttributeByName(name: any): any {
    notImplemented();
    return null;
  }

  /**
   * @param index
   * @return any
   */
  getAttributeByIndex(index: number): any {
    notImplemented();
    return null;
  }

  /**
   * @param name
   * @return number
   */
  existsAttribute(name: any): number {
    notImplemented();
    return null;
  }

  /**
   * @return any
   */
  close(): any {
    notImplemented();
    return null;
  }

  /**
   * @return number
   */
  skip(): number {
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
  private mnodeType: number;
  get nodeType(): number {
    return this.mnodeType;
  }
  set nodeType(value: number) {
    this.mnodeType = value;
  }

  /**
   *
   */
  private mname: any;
  get name(): any {
    return this.mname;
  }
  set name(value: any) {
    this.mname = value;
  }

  /**
   *
   */
  private mvalue: any;
  get value(): any {
    return this.mvalue;
  }
  set value(value: any) {
    this.mvalue = value;
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
