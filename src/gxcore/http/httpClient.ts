export class GxHttpClient {
  /* In */
  Host: string;
  Port: number;
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
  bodyAux = {};
  objHeaders = {};

  constructor() {
    this.Host = "localhost";
    this.Port = 0;
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
      if (this.Port === 0) {
        if (this.Secure === 1) {
          this.Port = 443;
        } else if (this.Secure === 0) {
          this.Port = 80;
        }
      }

      if (!this.Host.endsWith("/") && !this.BaseUrl.startsWith("/")) {
        urlAux = this.Host + ":" + this.Port + "/" + this.BaseUrl;
      } else if (this.Host.endsWith("/") && this.BaseUrl.startsWith("/")) {
        urlAux = this.Host.slice(0, -1) + ":" + this.Port + this.BaseUrl;
        urlAux = urlAux.replace(/\/\//g, "/");
      } else {
        if (this.Host.endsWith("/")) {
          urlAux =
            this.Host.slice(0, -1) + ":" + this.Port + "/" + this.BaseUrl;
        } else if (this.BaseUrl.startsWith("/")) {
          urlAux = this.Host + ":" + this.Port + this.BaseUrl;
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

    let contType = this.Headers["Content-Type"];

    if (this.Files) {
      for (let i = 0; i < this.Files.length; i++) {
        if (contType) {
          if (contType === "application/json") {
            const objectData = await this.uploadGXobject(
              urlAux,
              this.Files[i]["path"]
            );
            this.bodyAux[`${this.Files[i]["name"]}`] = objectData["object_id"];
          } else if (contType === "multipart/form-data") {
            const response = await fetch(this.Files[i]["path"]);
            const blob = await response.blob();
            this.bodyAux[`${this.Files[i]["name"]}`] = blob;
          }
        }
      }
    }

    if (contType) {
      if (contType === "application/json") {
        this.Body = this.objectToJson(this.bodyAux);
      } else if (contType === "multipart/form-data") {
        this.Body = this.objectToFormData(this.bodyAux);
      }
    }

    const options = {
      method: method,
      headers: this.Headers,
      body: this.Body
    };

    let auxVariables = "";
    if (Object.keys(this.Variables).length !== 0) {
      const keys = Object.keys(this.Variables);

      for (let i = 0; i < keys.length; i++) {
        const name = keys[i];
        const value = this.Variables[name];

        if (i === keys.length - 1) {
          auxVariables += `${name}=${value}`;
        } else {
          auxVariables += `${name}=${value}&`;
        }
      }
      urlAux = urlAux + "?" + auxVariables;
    }

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

      return this.response;
    } catch (error) {
      this.error = error.message;
      this.setErrDescription();

      this.setStatusCode();
      this.setReasonLine();
      this.setErrorCode();
    }
  }

  addHeader(name: string, value: string) {
    this.Headers[name] = value;
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
    if (!this.bodyAux) {
      this.bodyAux = JSON.parse(stringText);
    } else {
      this.bodyAux = { ...this.bodyAux, ...JSON.parse(stringText) };
    }
  }

  addVariable(name: string, value: string) {
    this.Variables[name] = value;
  }

  addFile(name: string, path: string) {
    let fileInformation = {};
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

  private async uploadGXobject(url, path) {
    const response = await fetch(path);
    const blob = await response.blob();

    return new Promise<any>((resolve, reject) => {
      let contentType = "image";
      if (blob.type) {
        contentType = blob.type;
      }

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": `${contentType}`
        },
        withCredentials: true,
        body: blob
      };

      fetch(`${url}/gxobject`, options)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Error en la solicitud.");
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
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
