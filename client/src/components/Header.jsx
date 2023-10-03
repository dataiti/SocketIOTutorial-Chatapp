import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../utils/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import useResponsive from "../hooks/useResponsive";
import { Conversation_Menu } from "../utils/constant";

const Header = () => {
  const theme = useTheme();
  const isMobile = useResponsive("between", "md", "xs", "sm");

  const [conversationMenuAnchorEl, setConversationMenuAnchorEl] =
    useState(false);

  const handleClickConversationMenu = (event) => {
    setConversationMenuAnchorEl(event.currentTarget);
  };

  const handleCloseConversationMenu = () => {
    setConversationMenuAnchorEl(null);
  };

  return (
    <>
      <Box
        p={2}
        width={"100%"}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          sx={{ width: "100%", height: "100%" }}
          justifyContent="space-between"
        >
          <Stack spacing={2} direction="row">
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">VCl</Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            {!isMobile && (
              <IconButton>
                <MagnifyingGlass />
              </IconButton>
            )}
            <Divider orientation="vertical" flexItem />
            <IconButton
              aria-controls={
                conversationMenuAnchorEl
                  ? "conversation-positioned-menu"
                  : undefined
              }
              aria-haspopup="true"
              aria-expanded={conversationMenuAnchorEl ? "true" : "false"}
              onClick={handleClickConversationMenu}
            >
              <CaretDown />
            </IconButton>
            <Menu
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              TransitionComponent={Fade}
              id="conversation-positioned-menu"
              aria-labelledby="conversation-positioned-button"
              anchorEl={conversationMenuAnchorEl}
              open={Boolean(conversationMenuAnchorEl)}
              onClose={handleCloseConversationMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box p={1}>
                <Stack spacing={1}>
                  {Conversation_Menu.map((el, index) => (
                    <MenuItem onClick={handleCloseConversationMenu} key={index}>
                      <Stack
                        sx={{ minWidth: 100 }}
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <span>{el.title}</span>
                      </Stack>{" "}
                    </MenuItem>
                  ))}
                </Stack>
              </Box>
            </Menu>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
