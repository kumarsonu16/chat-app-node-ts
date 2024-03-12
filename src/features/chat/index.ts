import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import {saveMessage, deleteMessage} from "./chatService";

interface MessageData {
    message: string;
    userId: string;
    chatRoom: string;
}

// WebSocket handling
const chat = (server: HttpServer) => {
  const io = new Server (server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    }
  });

  io.on("connection", (socket: Socket) => {
    console.log("A user connected", socket.id);


  //This serves as the default chat room. While users have the option to specify a chat room when connecting or sending messages, a default one is automatically created if none is specified
    socket.join("defaultChatRoom");

    // Listen for new messages
    socket.on("message", async (data: MessageData) => {
      // Save message to the database
     const savedMessage =  await saveMessage(data);
      // Broadcast message to all clients in the chat room
      io.in("defaultChatRoom").emit("message_receive", savedMessage);
    });

     // Listen for new messages
     socket.on("message_delete", async (data: any) => {
      // Save message to the database
     const res =  await deleteMessage(data.messageId);
      // Broadcast message to all clients in the chat room
      io.in("defaultChatRoom").emit("message_deleted", res);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

export default chat;
