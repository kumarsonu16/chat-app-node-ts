import {
  saveMessageToDB,
  deleteMessagesFromDB,
  getMessagesFromDB,
} from "./chatDBProvider";

export const saveMessage = async (data: object): Promise<any> => {
  const method = "chatDBProvider/saveMessage";
  try {
    return await saveMessageToDB(data);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};

export const getMessages = async (query: object): Promise<any> => {
  const method = "chatDBProvider/getMessages";
  try {
    return await getMessagesFromDB(query);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};

export const deleteMessage = async (messageId: string): Promise<any> => {
  const method = "chatDBProvider/deleteMessage";
  try {
    return await deleteMessagesFromDB(messageId);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};
