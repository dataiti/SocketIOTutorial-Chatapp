import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  VerifyPage,
  NewPasswordPage,
} from "../pages/auth";
import { AuthLayout, DashboardLayout } from "../layouts";
import { Navigate } from "react-router-dom";
import ChatPage from "../pages/chat/ChatPage";
import SettingsPage from "../pages/SettingsPage";

const routes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "new-password", element: <NewPasswordPage /> },
      { path: "verify", element: <VerifyPage /> },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      // { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
      //   { path: "app", element: <GeneralApp /> },
      //   { path: "group", element: <Group /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "conversation", element: <ChatPage /> },
      //   { path: "chats", element: <Chats /> },
      //   { path: "contact", element: <Contact /> },
      //   { path: "profile", element: <Profile /> },
      //   { path: "call", element: <CallPage /> },
      //   { path: "404", element: <Page404 /> },
      //   { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },

  { path: "*", element: <Navigate to="/404" replace /> },
];

export default routes;
