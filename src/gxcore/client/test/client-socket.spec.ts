import { GeneXusClientSocket } from "../client-socket";
import { subscribe } from "../../../pubSub/pubSub";
import waitForExpect from "wait-for-expect";
import * as log from "loglevel";
import { WS as WSServer } from "jest-websocket-mock";

waitForExpect.defaults.timeout = 3500;
waitForExpect.defaults.interval = 50;

const SOCKET_TEST_SERVER = "ws://localhost:1234";
let server: WSServer;

describe("WebSocket Tests", () => {
  beforeAll(() => {
    log.setDefaultLevel(log.levels.SILENT);
  });

  beforeEach(() => {
    server = new WSServer(SOCKET_TEST_SERVER);
  });

  afterEach(() => {
    server.close();
  });

  it(`Opens a Socket connection`, async () => {
    const doWork = jest.fn();
    subscribe(`${SOCKET_TEST_SERVER}.socket.connected`, () => {
      doWork();
    });
    await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    await GeneXusClientSocket.close();
  });

  it(`Opens a Socket connection (no await)`, async () => {
    const doWork = jest.fn();
    subscribe(`${SOCKET_TEST_SERVER}.socket.connected`, () => {
      doWork();
    });
    GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    GeneXusClientSocket.close();
  });

  it(`Send websocket data`, async () => {
    const doWork = jest.fn();
    const sendMessage = "test-socket-service";
    await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    GeneXusClientSocket.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    GeneXusClientSocket.close();
  });

  it(`Open single websocket connection`, async () => {
    const doWork = jest.fn();
    const sendMessage = "test-socket-service";
    subscribe(`${SOCKET_TEST_SERVER}.socket.connected`, () => {
      doWork();
    });
    for (let i = 0; i < 10; i++) {
      await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    GeneXusClientSocket.close();
  });

  it(`Open single websocket connection - 2`, async () => {
    const doWork = jest.fn();

    const sendMessage = "test-socket-service";
    subscribe(`${SOCKET_TEST_SERVER}.socket.connected`, () => {
      doWork();
    });
    for (let i = 0; i < 10; i++) {
      await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    GeneXusClientSocket.close();
  });

  it(`Receive websocket data`, async () => {
    const doWork = jest.fn();
    const sendMessage = "test-socket-service";
    subscribe(
      `${SOCKET_TEST_SERVER}.socket.messagereceived`,
      (data: string) => {
        if (data.indexOf(sendMessage) >= 0) {
          doWork();
        }
      }
    );
    await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    GeneXusClientSocket.send(sendMessage);
    server.send(sendMessage);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    await GeneXusClientSocket.close();
  });

  it(`Send and receive multiple websocket data`, async () => {
    let doWork = jest.fn();
    subscribe(
      `${SOCKET_TEST_SERVER}.socket.messagereceived`,
      (data: string) => {
        doWork();
      }
    );

    await GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    const qty = 3;
    for (var i = 0; i < qty; i++) {
      let sendMessage = "test";
      GeneXusClientSocket.send(sendMessage);
      await expect(server).toReceiveMessage(sendMessage);
      server.send(sendMessage);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(qty));
    GeneXusClientSocket.close();
  });

  it(`Send websocket data (without websocket open await)`, async () => {
    let doWork = jest.fn();
    let sendMessage = "test.1";
    GeneXusClientSocket.open(SOCKET_TEST_SERVER);
    GeneXusClientSocket.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    GeneXusClientSocket.close();
  });
});
