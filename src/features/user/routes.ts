import { checkSearchParams } from "./validation";
import { login } from "./userController";

export default [
  {
    path: "/api/v1/user/login",
    method: "post",
    handler: [
      //checkSearchParams /*We can chain things like checking authorization, add caching and many more */
      login,
    ],
  },
];
