import React from "react";
import useResponsive from "../hooks/useResponsive";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./TypeChat";

const Conversation = ({ menu, isMobile }) => {
  return (
    <Box p={isMobile ? 1 : 3}>
      <Stack spacing={2}>
        {Chat_History.map((el, idx) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} key={idx} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} key={idx} menu={menu} />;
                case "doc":
                  return <DocMsg el={el} key={idx} menu={menu} />;
                case "Link":
                  return <LinkMsg el={el} key={idx} menu={menu} />;
                case "reply":
                  return <ReplyMsg el={el} key={idx} menu={menu} />;
                default:
                  return <TextMsg el={el} key={idx} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Conversation;
