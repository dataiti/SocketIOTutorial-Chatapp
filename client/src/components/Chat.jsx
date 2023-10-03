import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Conversation from "./Conversation";
import { SimpleBarStyle } from "../utils/styles";
import useResponsive from "../hooks/useResponsive";

const Chat = () => {
  const theme = useTheme();

  const messageListRef = useRef(null);

  const isMobile = useResponsive("between", "md", "xs", "sm");

  return (
    <Stack height="100%" maxHeight="100vh" width={isMobile ? "100vw" : "auto"}>
      <Header />
      <Box
        ref={messageListRef}
        width={"100%"}
        sx={{
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Conversation menu={true} isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>

      <Footer />
    </Stack>
  );
};

export default Chat;
