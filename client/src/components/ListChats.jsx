import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, Users } from "phosphor-react";
import React, { useState } from "react";
import { SimpleBarStyle } from "../utils/styles";
import ChatElement from "./ChatElement";
import { ChatList } from "../data";
import Friends from "./Friends";

const ListChats = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "320px",
          backgroundColor:
            theme.palette.mode === "light" ? "#F8FAFF" : "#0f172a",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Users />
              </IconButton>
              <IconButton sx={{ width: "max-content" }}>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}></Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <ArchiveBox size={24} />
              <Button variant="text">Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                  return <ChatElement {...el} key={idx} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={() => setOpenDialog(false)} />
      )}
    </>
  );
};

export default ListChats;
