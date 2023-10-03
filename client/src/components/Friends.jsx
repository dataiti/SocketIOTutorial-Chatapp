import { Dialog, DialogContent, Slide, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import UserList from "./UserList";
import FriendsList from "./FriendsList";
import RequestsList from "./RequestsList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);

  const hanldeChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={hanldeChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {(() => {
              switch (value) {
                case 0:
                  return <UserList />;
                case 1:
                  return <FriendsList />;
                case 2:
                  return <RequestsList />;
                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
