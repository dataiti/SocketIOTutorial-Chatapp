import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/authSlice";
import ThemeDialog from "../components/ThemeDialog";

const SettingsPage = () => {
  const theme = useTheme();

  const [openTheme, setOpenTheme] = useState(true);
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const currentUser = useSelector(selectCurrentUser);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  console.log(currentUser);

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box
          sx={{
            overflowY: "scroll]",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack spacing={5} p={4}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h5">Settings</Typography>
            </Stack>

            <Stack direction="row" spacing={3}>
              <Avatar
                src={faker.image.avatar()}
                sx={{ height: 50, width: 50 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">{`${currentUser.firstName} ${currentUser.lastName}`}</Typography>
                <Typography variant="body2">{`${currentUser.email}`}</Typography>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <Stack
                    key={key}
                    onClick={onclick}
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                  >
                    <Stack alignItems="center" spacing={2} direction="row">
                      {icon}
                      <Typography variant="body2">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider />}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom: "6px solid #0162C4",
          }}
        ></Box>
        {openTheme && (
          <ThemeDialog
            openTheme={openTheme}
            handleCloseTheme={handleCloseTheme}
          />
        )}
      </Stack>
    </>
  );
};

export default SettingsPage;
