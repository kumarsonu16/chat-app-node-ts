import * as Provider from "../userService";
import * as userDBProvider from "../userDBProvider";
import { stub, restore } from "sinon";
import { userMockData } from "./userMockData";

describe("#UserService", () => {
  let serviceRes: null = null,
    error = null;
  afterEach(() => {
    serviceRes = null;
    error = null;
    restore();
  });
  describe("Success when users found", () => {
    beforeAll(async () => {
      stub(userDBProvider, "getUser").resolves(userMockData.user);
      try {
        serviceRes = await Provider.loginUser({
          username: "sonu",
          password: "password",
        });
      } catch (error) {
        error = error;
      }
    });
    it("get users successfully", function () {
      expect(serviceRes).toEqual(userMockData.user);
    });
  });
});
