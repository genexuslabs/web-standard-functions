function notImplemented() {
  console.log("Not yet implemented");
}

export class XMLWriter {
  /**
   * @param file
   * @return any
   */
  open(file: any): any {
    notImplemented();
    return null;
  }

  /**
   * @return any
   */
  openToString(): any {
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
   * @param value
   * @return any
   */
  writeElement(name: any, value: any): any {
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

  /**
   *
   */
  private merrCode: number;
  get errCode(): number {
    return this.merrCode;
  }
  set errCode(value: number) {
    this.merrCode = value;
  }

  /**
   *
   */
  private merrDescription: any;
  get errDescription(): any {
    return this.merrDescription;
  }
  set errDescription(value: any) {
    this.merrDescription = value;
  }

  /**
   *
   */
  private mresultingString: any;
  get resultingString(): any {
    return this.mresultingString;
  }
  set resultingString(value: any) {
    this.mresultingString = value;
  }
}
