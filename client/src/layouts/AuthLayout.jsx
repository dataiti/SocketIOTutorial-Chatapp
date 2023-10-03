import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import logoDark from "../assets/logo5.png";
import logoLight from "../assets/logo6.png";

const AuthLayout = () => {
  const theme = useTheme();

  return (
    <Container sx={{ pt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
          <img
            src={theme.palette.mode === "light" ? logoLight : logoDark}
            alt="logo"
            style={{ height: 90, width: 90 }}
          />
        </Stack>
        <Outlet />
      </Stack>
    </Container>
  );
};

export default AuthLayout;
