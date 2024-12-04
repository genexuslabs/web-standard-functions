export class GxHttpClient {
  /* In */
  Host: string;
  _Port: number;
  Secure: number;
  BaseUrl: string;
  Timeout: number;
  Basic: number;
  Digest: number;
  IncludeCookies: boolean;
  EOF: boolean;

  /* Out */
  ReasonLine: string = "";
  ErrCode: number = 0;
  ErrDescription: string = "";
  StatusCode: number = 0;

  /* Add */
  Headers = {};
  Body = null;
  Variables = {};
  Files = [];

  /* Aux */
  response;
  reader;
  decoder = new TextDecoder("utf-8");
  error: string = "";
  bodyObject = {};
  bodyString = "";
  objHeaders = {};
  contType = "";

  constructor(Port: number = 0) {
    this.Host = "localhost";
    this._Port = Port;
    this.Secure = 0;
    this.BaseUrl = "/";
    this.Timeout = 30;
    this.Basic = 0;
    this.Digest = 1;
    this.IncludeCookies = true;
    this.EOF = false;
  }

  async execute(method: string, url: string) {
    let urlAux = "";

    if (!url.startsWith("http")) {
      const port = this.Port;
      if (!this.Host.endsWith("/") && !this.BaseUrl.startsWith("/")) {
        urlAux = this.Host + ":" + port + "/" + this.BaseUrl;
      } else if (this.Host.endsWith("/") && this.BaseUrl.startsWith("/")) {
        urlAux = this.Host.slice(0, -1) + ":" + port + this.BaseUrl;
        urlAux = urlAux.replace(/\/\//g, "/");
      } else {
        if (this.Host.endsWith("/")) {
          urlAux = this.Host.slice(0, -1) + ":" + port + "/" + this.BaseUrl;
        } else if (this.BaseUrl.startsWith("/")) {
          urlAux = this.Host + ":" + port + this.BaseUrl;
        }
      }

      if (!this.BaseUrl.endsWith("/") && !url.startsWith("/")) {
        urlAux = urlAux + "/" + url;
      } else if (this.BaseUrl.endsWith("/") && url.startsWith("/")) {
        urlAux = urlAux + url;
        urlAux = urlAux.replace(/\/\//g, "/");
      } else {
        urlAux = urlAux + url;
      }

      urlAux = this.Secure === 1 ? "https://" + urlAux : "http://" + urlAux;
    } else {
      urlAux = url;
    }

    if (this.Files.length > 0) {
      for (let i = 0; i < this.Files.length; i++) {
        if (
          this.bodyString !== "" ||
          this.Files.length > 1 ||
          this.contType.toLowerCase() === "multipart/form-data" ||
            this.contType.toLowerCase() === "application/json"
        ) {
          const response = await fetch(this.Files[i]["path"]);
          const blob = await response.blob();
          this.bodyObject[`${this.Files[i]["name"]}`] = blob;
        } else {
          const response = await fetch(this.Files[i]["path"]);
          const blob = await response.blob();
          this.Body = blob;
        }
      }
    }

    let auxVariables = "";
    if (Object.keys(this.Variables).length !== 0) {
      if (this.contType.toLowerCase() === "multipart/form-data") {
        const keys = Object.keys(this.Variables);
        for (let i = 0; i < keys.length; i++) {
          const name = keys[i];
          const value = this.Variables[name];
          this.bodyObject[name] = value;
        }
      } else {
        const keys = Object.keys(this.Variables);

        for (let i = 0; i < keys.length; i++) {
          const name = keys[i];
          const value = this.Variables[name];

          if (i === keys.length - 1) {
            auxVariables += `${encodeURI(name)}=${encodeURI(value)}`;
          } else {
            auxVariables += `${encodeURI(name)}=${encodeURI(value)}&`;
          }
        }
        urlAux = urlAux + "?" + auxVariables;
      }
    }

    if (!this.Body) {
      if (this.contType) {
        if (this.contType.toLowerCase() === "multipart/form-data") {
          if (this.bodyString !== "") {
            this.Body = this.objectToFormData({
              ...this.bodyObject,
              ...JSON.parse(this.bodyString)
            });
          } else {
            this.Body = this.objectToFormData(this.bodyObject);
          }
        } else if (this.contType.toLowerCase() === "application/json") {
          if (JSON.stringify(this.bodyObject) !== "{}") {
            if (this.bodyString !== "") {
              this.Body = this.objectToJson({
                ...this.bodyObject,
                ...JSON.parse(this.bodyString)
              });
            } else {
              this.Body = this.objectToJson(this.bodyObject);
            }
          } else {
            if (this.bodyString !== "") {
              this.Body = this.bodyString;
            }
          }
        } else {
          if (this.bodyString !== "") {
            this.Body = this.bodyString;
          }
        }
      } else {
        if (JSON.stringify(this.bodyObject) !== "{}") {
          if (this.bodyString !== "") {
            this.Body = this.objectToFormData({
              ...this.bodyObject,
              ...JSON.parse(this.bodyString)
            });
          } else {
            this.Body = this.objectToFormData(this.bodyObject);
          }
        } else {
          if (this.bodyString !== "") {
            this.Body = this.bodyString;
          }
        }
      }
    }

    const options = {
      method: method,
      headers: this.Headers,
      body: this.Body
    };

    if (this.IncludeCookies === true) {
      options["credentials"] = "same-origin";
    } else {
      options["credentials"] = "omit";
    }

    try {
      this.response = null;
      this.response = await Promise.race([
        fetch(urlAux, options),
        new Promise((_, reject) => {
          setTimeout(
            () => reject(new Error("Request timeout")),
            this.Timeout * 1000
          );
        })
      ]);

      this.setStatusCode();
      this.setReasonLine();

      this.error = "";
      this.setErrorCode();
      this.setErrDescription();
      this.reader = null;
      this.EOF = false;

      // Reset
      this.Headers = {};
      this.Body = null;
      this.Variables = {};
      this.Files = [];

      this.bodyObject = {};
      this.bodyString = "";
      this.objHeaders = {};
      this.contType = "";

      return this.response;
    } catch (error) {
      this.error = error.message;
      this.setErrDescription();

      this.setStatusCode();
      this.setReasonLine();
      this.setErrorCode();

      // Reset
      this.Headers = {};
      this.Body = null;
      this.Variables = {};
      this.Files = [];

      this.bodyObject = {};
      this.bodyString = "";
      this.objHeaders = {};
      this.contType = "";
    }
  }

  addHeader(name: string, value: string) {
    if (name.toLowerCase() !== "content-type") {
      this.Headers[name] = value;
    } else {
      if (
        name.toLowerCase() === "content-type" &&
        value.toLowerCase() !== "multipart/form-data"
      ) {
        this.Headers[name] = value;
        this.contType = value;
      } else {
        this.contType = value;
      }
    }
  }

  addAuthentication(method: number, user: string, password: string) {
    switch (method) {
      case 0:
        this.addHeader("Authorization", "Basic " + btoa(user + ":" + password));
        break;

      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      default:
        break;
    }
  }

  addString(stringText: string) {
    if (this.bodyString !== "") {
      this.bodyString += stringText;
    } else {
      this.bodyString = stringText;
    }
  }

  addVariable(name: string, value: string) {
    this.Variables[name] = value;
  }

  addFile(path: string, name?: string) {
    let fileInformation = {};
    if (!name) {
      name = "";
    }
    fileInformation["name"] = name;
    fileInformation["path"] = path;

    this.Files.push(fileInformation);
  }

  getHeader(name) {
    if (JSON.stringify(this.objHeaders) === "{}") {
      for (const [key, value] of this.response.headers.entries()) {
        this.objHeaders[key.toLowerCase()] = value;
      }
    }

    return this.objHeaders[name.toLowerCase()];
  }

  get Port() {
    if (this._Port === 0) {
      if (this.Secure === 1) {
        return 443;
      } else if (this.Secure === 0) {
        return 80;
      }
    } else {
      return this._Port;
    }
  }

  set Port(Port) {
    this._Port = Port;
  }

  async toString() {
    if (this.response) {
      return this.response.text();
    }
  }

  async toFile(nameFile) {
    const res = await this.response.text();
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(res);
    link.download = `${nameFile}`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async readChunk() {
    if (!this.reader) {
      this.reader = this.response.body.getReader();
    }

    const chunk = await this.reader.read();
    const { done, value } = chunk;

    const decodedChunk = this.decoder.decode(value);

    if (done) {
      this.EOF = true;
      return "";
    }
    return decodedChunk;
  }

  setReasonLine() {
    if (this.response) {
      this.ReasonLine = this.response.statusText;
    } else {
      this.ReasonLine = "";
    }
  }

  setErrorCode() {
    if (this.response) {
      if (this.response.status === 200) {
        this.ErrCode = 0;
      } else {
        this.ErrCode = this.response.status;
      }
    } else {
      this.ErrCode = 0;
    }
  }

  setErrDescription() {
    if (this.error !== "") {
      this.ErrDescription = this.error;
    } else {
      if (this.response.status === 200) {
        this.ErrDescription = "";
      } else {
        this.ErrDescription = this.response.statusText;
      }
    }
  }

  setStatusCode() {
    if (this.response) {
      this.StatusCode = this.response.status;
    } else {
      this.StatusCode = 0;
    }
  }

  private objectToFormData(object) {
    const formData = new FormData();

    Object.keys(object).forEach(key => {
      formData.append(key, object[key]);
    });

    return formData;
  }

  private objectToJson(object) {
    const json = JSON.stringify(object);
    return json;
  }
}
