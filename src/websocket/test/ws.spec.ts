import { WS } from "../ws";
import waitForExpect from "wait-for-expect";
import * as log from "loglevel";
import { WS as WSServer } from "jest-websocket-mock";

waitForExpect.defaults.timeout = 3500;
waitForExpect.defaults.interval = 10;

const SOCKET_TEST_SERVER = "ws://localhost:1234";
const server = new WSServer(SOCKET_TEST_SERVER);

describe("WebSocket Tests", () => {
  beforeEach(() => {
    log.setDefaultLevel(log.levels.SILENT);
  });

  it(`Opens a websocket connection`, async () => {
    const doWork = jest.fn();
    let ws = new WS();
    ws.onOpen = ev => {
      doWork();
    };
    await ws.open(SOCKET_TEST_SERVER);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    ws.close();
  });

  it(`Send websocket data`, async () => {
    const doWork = jest.fn();
    const sendMessage = "websocket test";
    let ws = new WS();
    await ws.open(SOCKET_TEST_SERVER);
    ws.onMessage = ev => {
      if (ev.data === sendMessage) {
        doWork();
      }
    };
    ws.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    ws.close();
  });

  it(`Receive websocket data`, async () => {
    const doWork = jest.fn();
    const sendMessage = "websocket test";
    let ws = new WS();
    await ws.open(SOCKET_TEST_SERVER);
    ws.onMessage = ev => {
      if (ev.data === sendMessage) {
        doWork();
      }
    };
    ws.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    server.send(sendMessage);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    ws.close();
  });

  it(`Send and receive multiple websocket data`, async () => {
    const doWork = jest.fn();
    let sendMessage = "test.1";
    let ws = new WS();
    await ws.open(SOCKET_TEST_SERVER);
    ws.onMessage = ev => {
      if (ev.data === sendMessage) {
        doWork();
      }
    };
    ws.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    server.send(sendMessage);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    sendMessage = "test.2";
    ws.send(sendMessage);
    await expect(server).toReceiveMessage(sendMessage);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    ws.close();
  });
});
