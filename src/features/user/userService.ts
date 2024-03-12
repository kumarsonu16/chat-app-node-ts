import { getUser } from "./userDBProvider";

export const loginUser = async (filter: object): Promise<any> => {
  const method = 'userService/loginUser';
  try {
    return await getUser(filter);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};
