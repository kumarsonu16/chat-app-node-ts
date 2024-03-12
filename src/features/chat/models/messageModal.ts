import mongoose, { Schema } from "mongoose";

interface Message {
  username: string;
  senderId: string;
  chatRoom: string;
}

enum Status {
  active = 1,
  delete = 2,
}

const messageSchema: Schema = new Schema(
  {
    message: { type: String, required: true, trim: true },
    senderId: { type: String, trim: true, required: true },
    chatRoom: { type: String, trim: true, required: true, default: "defaultChatRoom"},
    status: { type: Number, enum: Status, trim: true, default: Status.active },
  },
  { timestamps: true }
);

// Define and export the Message model
const MessageModel = mongoose.model<Message>("Message", messageSchema);

export default MessageModel;
