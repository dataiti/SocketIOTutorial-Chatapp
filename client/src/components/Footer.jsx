import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import React, { useRef } from "react";
import useResponsive from "../hooks/useResponsive";
import { useState } from "react";
import ChatInput from "./ChatInput";
import { PaperPlaneTilt } from "phosphor-react";

const Footer = () => {
  const theme = useTheme();

  const [openPicker, setOpenPicker] = useState(false);
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const isMobile = useResponsive("between", "md", "xs", "sm");

  const handleClickEmoji = () => {};

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent !important",
      }}
    >
      <Box
        p={isMobile ? 1 : 2}
        width="100%"
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={isMobile ? 1 : 3}>
          <Stack sx={{ width: "100%" }}>
            <Box
              style={{
                zIndex: 10,
                position: "fixed",
                display: openPicker ? "inline" : "none",
                bottom: 81,
                right: 100,
              }}
            >
              <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={(emoji) => handleClickEmoji(emoji.native)}
              />
            </Box>
            <ChatInput
              inputRef={inputRef}
              value={value}
              setValue={setValue}
              openPicker={openPicker}
              setOpenPicker={setOpenPicker}
            />
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton
                onClick={() => {
                  // socket.emit("text_message", {
                  //   message: linkify(value),
                  //   conversation_id: room_id,
                  //   from: user_id,
                  //   to: current_conversation.user_id,
                  //   type: containsUrl(value) ? "Link" : "Text",
                  // });
                }}
              >
                <PaperPlaneTilt color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
