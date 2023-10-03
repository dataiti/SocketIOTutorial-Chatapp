import React from "react";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import AntSwitch from "./AntSwitch";
import { useTheme } from "@mui/material/styles";
import { navButtons } from "../utils/constant";
import useSettings from "../hooks/useSettings";
import { useDispatch, useSelector } from "react-redux";
import logoDark from "../assets/logo5.png";
import logoLight from "../assets/logo6.png";
import { Nav_Setting } from "../data";
import { updateTab } from "../redux/slices/appSlice";
import { useNavigate } from "react-router-dom";
import { SignOut } from "phosphor-react";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/conversation";

    case 1:
      return "/group";

    case 2:
      return "/call";

    case 3:
      return "/settings";

    default:
      break;
  }
};

const Sidebar = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { tab } = useSelector((state) => state.app);

  const navigate = useNavigate();

  const selectedTab = tab;

  const { onToggleMode } = useSettings();

  const handleChangeTab = (index) => {
    dispatch(updateTab({ tab: index }));
    navigate(getPath(index));
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: 100,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        py={3}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Stack direction="column" alignItems="center">
          <Stack direction="column" alignItems="center">
            <img
              src={theme.palette.mode === "light" ? logoLight : logoDark}
              alt="logo"
              style={{ height: 70, width: 70 }}
            />
          </Stack>
          <Stack spacing={2} alignItems="center">
            {navButtons.map((el) => {
              return el.index == selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                  key={el.index}
                >
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              );
            })}
            <Divider sx={{ width: 48 }} />
            {Nav_Setting.map((el) => {
              return el.index == selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                  key={el.index}
                >
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                    // dispatch(UpdateTab(el.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              );
            })}
          </Stack>
        </Stack>

        <Stack alignContent="center" spacing={2}>
          <IconButton>
            <SignOut />
          </IconButton>
          <AntSwitch
            defaultChecked={theme.palette.mode === "dark"}
            checked={theme.palette.mode === "dark" ? true : false}
            onChange={onToggleMode}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
