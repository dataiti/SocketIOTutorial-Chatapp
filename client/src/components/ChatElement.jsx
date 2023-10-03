import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledBadge } from "../utils/styles";
import { truncateText } from "../utils/fn";

const ChatElement = ({ img, name, msg, time, unread, online, id }) => {
  return (
    <Box sx={{ width: "100%", borderRadius: 1, cursor: "pointer" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{truncateText(msg, 20)}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge
            className="unread-count"
            color="primary"
            badgeContent={unread}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
