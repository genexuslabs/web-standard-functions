import { WS } from "../websocket/ws";
import { publish } from "../pubSub/pubSub";
import * as log from "loglevel";

export default class SocketService {
  private logger = log.getLogger("SocketManagerService");
  private static instance: SocketService;
  private connections;

  private constructor() {
    this.connections = {};
  }

  static getInstance() {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  public async open(url: string, id?: string): Promise<void> {
    if (!this.connections[url]) {
      const connection: WS = new WS();
      this.connections[url] = connection;
      this.attachHandlers(id !== null ? id : url, connection);
      return connection.open(url);
    }
    return Promise.resolve();
  }

  public close(url: string): void {
    const connection = this.connections[url];
    if (connection) {
      delete this.connections[url];
      connection.close();
    }
  }

  public async send(url: string, msg: string): Promise<void> {
    await this.open(url);
    this.connections[url].send(msg);
  }

  private attachHandlers(id: string, connection: WS) {
    connection.onOpen = (ev: Event) => {
      publish(`${id}.socket.connected`, ev);
      publish(`GeneXus.Client.Socket.Connected`, ev);
    };
    connection.onClose = (ev: Event) => {
      publish(`${id}.socket.connectionclosed`, ev);
    };
    connection.onError = (ev: Event) => {
      publish(`${id}.socket.connectionfailed`, ev);
      publish(`GeneXus.Client.Socket.ConnectionFailed`, ev);
    };
    connection.onMessage = (ev: MessageEvent) => {
      publish(`${id}.socket.messagereceived`, ev.data);
      publish(`GeneXus.Client.Socket.MessageReceived`, ev.data);
    };
  }
}
