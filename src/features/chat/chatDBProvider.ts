import MessageModal from "./models/messageModal";
import { MessageFilter } from "./chatTypes";

export const saveMessageToDB = async (data: object): Promise<any> => {
  const method = "chatDBProvider/saveMessageToDB";
  try {
    const messageObj = new MessageModal(data);
    return await messageObj.save(data);
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};

export const getMessagesFromDB = async (filter: MessageFilter): Promise<any> => {
  const method = "chatDBProvider/getMessagesFromDB";
  try {
    const query  = filter.status == 2 ? filter : {...filter, status:1};
    return await MessageModal.find(query).sort('-updatedAt');
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};

export const deleteMessagesFromDB = async (messageId: string): Promise<any> => {
  const method = "chatDBProvider/deleteMessagesFromDB";
  try {
    return await MessageModal.findByIdAndUpdate({_id: messageId, status: 1}, {status: 2});
  } catch (error) {
    console.log(`${method} error: ${error}`);
    throw error;
  }
};
