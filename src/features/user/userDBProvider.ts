import UserModal from "./models/userModal";

export const getUser = async (filter: object): Promise<any> => {
  const method = "userDBProvider/getUser";
  try {
    return await UserModal.findOne(filter);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};
