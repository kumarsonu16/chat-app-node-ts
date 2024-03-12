
import { stub, restore } from "sinon";
import { Request, Response } from 'express';
import { messagesMock } from "./chatMockData";
import * as Provider from "../chatService";
import * as chatController from "../chatController";

describe.only("#ChatController", () => {
    let serviceRes: null = null,
    req = {} as Request,
    res = {} as Response,
    error = null;
    afterEach(() => {
      serviceRes = null;
      error = null;
      restore();
    });
    describe("Success when messages found", () => {
      beforeAll(async () => {
        stub(Provider, "getMessages").resolves(messagesMock.messagesData);
        // Mocking Express Request and Response objects
        // Mocking Express response methods
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        req.params = { status: "1", userId:"65eec0a023d8861afd2282f3"};
        try {
          serviceRes = await chatController.getMessagesByChatRoom(req,res)
        } catch (error) {
          error = error;
        }
      });
      it("get messages successfully", function () {
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith(messagesMock.getMessages);
      });
    });
  });
