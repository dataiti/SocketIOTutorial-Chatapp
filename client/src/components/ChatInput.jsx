import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { LinkSimple, Smiley } from "phosphor-react";
import { styled } from "@mui/material/styles";
import React, { useRef, useState } from "react";

import { Actions } from "../utils/constant";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const ChatInput = ({
  openPicker,
  setOpenPicker,
  setValue,
  value,
  inputRef,
}) => {
  const [openActions, setOpenActions] = React.useState(false);

  return (
    <StyledInput
      inputRef={inputRef}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((el, idx) => (
                <Tooltip placement="right" title={el.title} key={idx}>
                  <Fab
                    onClick={() => {
                      setOpenActions(!openActions);
                    }}
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                    aria-label="add"
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>

            <InputAdornment position="start">
              <IconButton
                onClick={() => {
                  setOpenActions(!openActions);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <Stack sx={{ position: "relative" }}>
            <InputAdornment position="start">
              <IconButton
                onClick={() => {
                  setOpenPicker(!openPicker);
                }}
              >
                <Smiley />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
      }}
    />
  );
};

export default ChatInput;
