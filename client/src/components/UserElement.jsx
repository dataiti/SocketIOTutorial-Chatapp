import React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledBadge, StyledChatBox } from "../utils/styles";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { socket } from "../socket";

const user_id = window.localStorage.getItem("user_id");

const UserElement = ({ firstName, lastName, online, _id }) => {
  const theme = useTheme();

  console.log(user_id);

  return (
    <StyledChatBox
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems={"center"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={`${firstName} ${lastName}`} />
            </StyledBadge>
          ) : (
            <Avatar alt={`${firstName} ${lastName}`} />
          )}
          <Stack spacing={3}>
            <Typography variant="subtitle2">{`${firstName} ${lastName}`}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            onClick={() => {
              socket.emit("friend_request", { to: _id, from: "123234" }, () => {
                alert("request sent");
              });
            }}
            variant="outlined"
          >
            Send Request
          </Button>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

export default UserElement;
