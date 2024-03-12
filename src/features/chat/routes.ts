import { saveMessageToChatRoom, getMessagesByChatRoom, deleteMessageFromChatRoom } from "./chatController";

const basePath = `/api/v1/chat/messages`;

export default [
  {
    path: `${basePath}/send`,
    method: "post",
    handler: [
      saveMessageToChatRoom
    ],
  },
  {
    path: `${basePath}`,
    method: "get",
    handler: [
      getMessagesByChatRoom
    ],
  },
  {
    path: `${basePath}/:messageId`,
    method: "delete",
    handler: [
      deleteMessageFromChatRoom
    ],
  },
];
