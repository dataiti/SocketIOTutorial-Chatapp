import {
  ChatCircleDots,
  Users,
  Phone,
  Image,
  Sticker,
  Camera,
  File,
  User,
} from "phosphor-react";

export const navButtons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

export const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

export const Conversation_Menu = [
  {
    title: "Contact info",
  },
  {
    title: "Mute notifications",
  },
  {
    title: "Clear messages",
  },
  {
    title: "Delete chat",
  },
];
