import * as log from "loglevel";

export class Options {
  public autoReconnect = true;
  public autoReconnectInterval = 5 * 1000;
  public maxReconnectAttempts = 10;
}

export class WS {
  private logger = log.getLogger("websocket");
  private options = new Options();
  private url: string;
  private websocket: WebSocket;
  private currentReconnectAttempts = 0;

  /**
   * Connects to a WebSocket Server endpoint using the URL specified.
   * @param {string} url WebSocket server URL.
   * @param {Options} options Connection options (optional).
   */
  public async open(url: string, options?: Options): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.supported()) {
        this.logger.error("WebSocket is not supported in this browser");
        reject();
        return;
      }
      if (!url.startsWith("ws")) {
        this.logger.error(
          "Not supported websocket protocol (ws:// or wss:// supported only):",
          url
        );
        reject();
        return;
      }
      this.options = options || this.options;
      this.url = url;
      this.openImpl(resolve, reject);
    });
  }

  /**
   * Closes the websocket connection.
   * @param {number} code Error code for closed connection (optional)
   * @param {string} reason Reason description for closed connection (optional)
   */
  public close(code?: number, reason?: string) {
    if (this.websocket) {
      this.websocket.close(code, reason);
    }
  }

  /**
   * Send the data to WebSocket Server currently connected.
   * @param {any} data Message data.
   */
  public send(data: any): boolean {
    // TODO: Check if websocket state is open. Otherwise try to reconnect.
    let ok = true;
    try {
      this.websocket.send(data);
    } catch (e) {
      this.logger.error("Send Error", e);
      ok = false;
    }
    return true;
  }

  public onClose: ((this: WS, ev: CloseEvent) => any) | null;
  public onError: ((this: WS, ev: Event) => any) | null;
  public onMessage: ((this: WS, ev: MessageEvent) => any) | null;
  public onOpen: ((this: WS, ev: Event) => any) | null;

  private openImpl(resolve, reject): void {
    this.websocket = new WebSocket(this.url);

    this.websocket.onopen = (e: Event) => {
      this.currentReconnectAttempts = 0;
      log.debug("Connection established", this.url);
      resolve();
      if (this.onOpen) {
        this.onOpen(e);
      }
    };

    this.websocket.onmessage = (e: MessageEvent) => {
      this.logger.debug("Message received", e.data);
      if (this.onMessage) {
        this.onMessage(e);
      }
    };

    this.websocket.onclose = e => {
      switch (e.code) {
        case 1000:
          this.logger.debug("Connection closed");
          if (this.onClose) {
            this.onClose(e);
          }
          reject();
          break;
        default:
          this.reconnect(resolve, reject);
          break;
      }
    };

    this.websocket.onerror = e => {
      this.logger.error("Connection error", JSON.stringify(e));
      if (this.onError) {
        this.onError(e);
      }
      this.reconnect(resolve, reject);
    };
  }

  private supported(): boolean {
    return "WebSocket" in (window || global);
  }

  private reconnect(resolve, reject): void {
    if (this.currentReconnectAttempts++ < this.options.maxReconnectAttempts) {
      setTimeout(() => {
        this.logger.debug("Reconnecting...");
        this.openImpl(resolve, reject);
      }, this.options.autoReconnectInterval);
    } else {
      reject();
    }
  }
}
