import React, { useState } from "react";
import FormProvider from "../components/forms/FormProvider";
import { Alert, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import RHFTextField from "./forms/RHFTextField";
import { useForm } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useLoginMutation } from "../redux/apis/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [triggerLogin, { isLoading }] = useLoginMutation();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const methods = useForm({
    defaultValues: {
      email: "nguyendat@gmail.com",
      password: "12345678",
    },
    resolver: yupResolver(loginSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await triggerLogin(data).unwrap();
      if (response.data) {
        dispatch(
          setCredentials({ user: response.data, token: response.accessToken })
        );
        navigate("/conversation");
      }
    } catch (error) {
      console.log(error.message);
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link
          component={RouterLink}
          to="/auth/reset-password"
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="button"
        loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
};

export default LoginForm;
