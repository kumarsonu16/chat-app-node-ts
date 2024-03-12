import { Request, Response } from "express";
import {
  saveMessage,
  getMessages,
  deleteMessage,
} from "./chatService";

export const getMessagesByChatRoom = async (req: Request,res: Response): Promise<any> => {
  try {
    const messages = await getMessages(req.query);
    return res.status(200).json({data:messages, message:"Data fetched successfully"});
  } catch (error) {
    console.error("Error fetching message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const saveMessageToChatRoom = async (req: Request,res: Response): Promise<any> => {
  try {
    const message = await saveMessage(req.body);

    // If there are no message, return a 204 response
    if (!message) {
      return res.status(204).json({ message: "No message found" });
    }
    return res.status(200).json({data:message, message:"Data saved successfully"});
  } catch (error) {
    console.error("Error fetching message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const deleteMessageFromChatRoom = async (req: Request,res: Response): Promise<any> => {
  try {
    const message = await deleteMessage(req.params.messageId);

    // If there are no message, return a 204 response
    if (!message) {
      return res.status(204).json({ message: "No message found" });
    }
    return res.status(200).send("Data deleted successfully");
  } catch (error) {
    console.error("Error fetching message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};