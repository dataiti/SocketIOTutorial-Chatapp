import { Box, Stack } from "@mui/material";
import React from "react";
import ListChats from "../../components/ListChats";
import { useTheme } from "@mui/material/styles";
import Chat from "../../components/Chat";

const ChatPage = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <ListChats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light" ? "#FFF" : theme.palette.background,
        }}
      >
        <Chat />
      </Box>
    </Stack>
  );
};

export default ChatPage;
