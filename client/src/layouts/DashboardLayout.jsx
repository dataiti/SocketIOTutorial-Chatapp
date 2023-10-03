import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
// import { socket, connectSocket } from "../socket";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect(`http://localhost:5000`);

const DashboardLayout = () => {
  const { userId } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   connectSocket(userId);
  // }, [userId]);
  return (
    <>
      <Stack direction="row">
        <Sidebar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
