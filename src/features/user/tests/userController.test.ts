
import { stub, restore } from "sinon";
import { Request, Response } from 'express';
import { userMockData } from "./userMockData";
import * as Provider from "../userService";
import * as userController from "../userController";

describe("#UserController", () => {
  let serviceRes: null = null,
    req = {} as Request,
    res = {} as Response,
  error = null;
  afterEach(() => {
    serviceRes = null;
    error = null;
    restore();
  });

  describe("Success when user found", () => {
    beforeAll(async () => {
      stub(Provider, "loginUser").resolves(userMockData.user);
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      req.body = { username: "username", password:"password"};
      try {
        serviceRes = await userController.login(req,res)
      } catch (error) {
        error = error;
      }
    });
    it("get user successfully", function () {
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(userMockData.loginResponse);
    });
  });
});
