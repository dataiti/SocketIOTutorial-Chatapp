import { Stack, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>
      </Stack>
      <LoginForm />
    </>
  );
};

export default LoginPage;
