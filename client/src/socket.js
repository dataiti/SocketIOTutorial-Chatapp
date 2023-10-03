import { io } from "socket.io-client";

let socket;

const connectSocket = (userId) => {
  socket = io("http://localhost:5000", {
    transports: ["websocket"],
  });
};

export { socket, connectSocket };
