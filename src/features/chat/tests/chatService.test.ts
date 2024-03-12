import * as Provider from "../chatService";
import * as chatDBProvider from "../chatDBProvider";
import { stub, restore } from "sinon";
import { messagesMock } from "./chatMockData";

describe("#chatService", () => {
  let serviceRes: null = null,
    error = null;
  afterEach(() => {
    serviceRes = null;
    error = null;
    restore();
  });
  describe("Success when chats found", () => {
    beforeAll(async () => {
      stub(chatDBProvider, "getMessagesFromDB").resolves(messagesMock.messagesData);
      try {
        serviceRes = await Provider.getMessages({});
      } catch (error) {
        error = error;
      }
    });
    it("get chats successfully", function () {
      expect(serviceRes).toEqual(messagesMock.messagesData);
    });
  });
});
