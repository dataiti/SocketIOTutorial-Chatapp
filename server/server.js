const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { Server } = require("socket.io");

const router = require("./src/routes");
const handleError = require("./src/middlewares/handleError");

const http = require("http");
const User = require("./src/models/user");
const FriendRequest = require("./src/models/friendRequest");
const Message = require("./src/models/message");

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// connect db
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("✅ Connect DB successfully !");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
router(app);

// handle error
handleError(app);

// port
const port = +process.env.PORT || 8000;
app.listen(port, () => {
  console.log("✅ Server running on port " + port);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// socket
io.on("connection", async (socket) => {
  const userId = socket.handshake.query["userId"];

  if (Boolean(userId) && userId !== null) {
    try {
      await User.findByIdAndUpdate(userId, {
        socketId: socket.id,
        status: "Online",
      });
    } catch (error) {
      console.log(error);
    }
  }

  socket.on("friend_request", async (data) => {
    const to = await User.findById(data.to).select("socketId");
    const from = await User.findById(data.from).select("socketId");

    await FriendRequest.create({
      sender: data.to,
      recipient: data.from,
    });

    io.to(to?.socketId).emit("new_friend_request", {
      message: "New friend request recevied",
    });
    io.to(form?.socketId).emit("request_sent", {
      message: "Request sent successfully",
    });
  });

  socket.on("accept_request", async (data) => {
    const requestDoc = await FriendRequest.findById(data.requestId);

    const sender = await User.findById(requestDoc.sender);
    const recipient = await User.findById(requestDoc.recipient);

    sender.friends.push(requestDoc.recipient);
    recipient.friends.push(requestDoc.sender);

    await receiver.save({ new: true, validateModifiedOnly: true });
    await sender.save({ new: true, validateModifiedOnly: true });

    await FriendRequest.findByIdAndDelete(data.requestId);

    io.to(sender?.socketId).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
    io.to(recipient?.socketId).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
  });

  io.on("get_direct_conversations", async ({ userId }, callback) => {
    const existingConversations = await Message.find({
      participants: { $all: [userId] },
    }).populate("participants", "firstName lastName avatar _id email status");

    callback(existingConversations);
  });

  io.on("start_conversation", async (data) => {
    const { from, to } = data;

    const existingConversations = await Message.find({
      participants: { $size: 2, $all: [from, to] },
    }).populate("participants", "firstName lastName avatar _id email status");

    if (existingConversations.length === 0) {
      let newChat = await Message.create({
        participants: [to, from],
      });

      newChat = await Message.findById(newChat).populate(
        "participants",
        "firstName lastName _id email status"
      );

      socket.emit("start_chat", newChat);
    } else {
      socket.emit("start_chat", existingConversations[0]);
    }
  });

  io.on("get_messages", async (data, callback) => {
    try {
      const { message } = await Message.findById(data.conversationId).select(
        "messages"
      );

      callback(message);
    } catch (error) {
      console.log(error);
    }
  });

  io.on("text_message", async (data) => {
    const { message, from, to, type, conversationId } = data;

    const toUser = await User.findById(to);
    const fromUser = await User.findById(from);

    const newMessage = {
      to,
      from,
      type,
      text: message,
      createdAt: Date.now(),
    };

    const chat = await Message.findById(conversationId);
    chat.messages.push(newMessage);

    await chat.save({ new: true, validateModifiedOnly: true });

    io.to(toUser?.socketId).emit("new_message", {
      conversationId,
      message: newMessage,
    });
    io.to(fromUser?.socketId).emit("new_message", {
      conversationId,
      message: newMessage,
    });
  });
});
