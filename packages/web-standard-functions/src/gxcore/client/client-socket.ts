import SocketService from "../../web/socketService";
import { GeneXusSDNetwork } from "../sd/network";
import { GeneXusClientClientInformation } from "./client-information";

export enum SocketStatus {
  Disconnected = 0,
  Connected = 1
}

export class GeneXusClientSocket {
  public static url: string = "";
  public static status: SocketStatus = SocketStatus.Disconnected;
  private static socketService: SocketService = SocketService.getInstance();

  /**
   * Connects to a Socket Server endpoint using the URL specified in the 'url' property
   * New messages will be published to '{url}.socket.messagereceived' event.
   * New opened connections will be published to '{url}.socket.connected' event.
   * Failed connections will be published to '{url}.socket.connectionfailed' event.
   * Closed connections will be published to '{url}.socket.connectionclosed' event.
   */
  public static async open(url?: string): Promise<void> {
    this.url = resolveUrl(url);
    await this.socketService.open(this.url, url);
    this.status = SocketStatus.Connected;
  }

  /**
   * Closes the socket connection.
   */
  public static close(): void {
    this.status = SocketStatus.Disconnected;
    this.socketService.close(this.url);
  }

  /**
   * Sends the data to the currently connected Socket Server.
   * @param {any} data The data to send.
   */
  public static async send(data: any): Promise<void> {
    return this.socketService.send(this.url, data);
  }
}

const resolveUrl = (url?: string): string => {
  let wsUrl = url;
  if (!wsUrl) {
    wsUrl =
      GeneXusSDNetwork.applicationServerURL()
        .replace("http://", "ws://")
        .replace("https://", "ws://") + "gxwebsocket.svc";
    wsUrl =
      wsUrl.indexOf("?") < 0
        ? wsUrl + "?" + GeneXusClientClientInformation.id
        : wsUrl;
  }

  return wsUrl;
};
