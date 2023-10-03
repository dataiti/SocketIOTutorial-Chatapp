import React, { useState } from "react";
import {
  Dialog,
  Slide,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import useSettings from "../hooks/useSettings";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThemeDialog = ({ openTheme, handleCloseTheme }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  console.log(theme.palette.mode);

  const [themeValue, setThemeValue] = useState(theme.palette.mode);

  const { onToggleMode } = useSettings();

  const handleApplyTheme = () => {
    onToggleMode();
  };

  return (
    <>
      <Dialog
        fullWidth
        open={openTheme}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseTheme}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ mb: 2 }}>{"Choose Theme"}</DialogTitle>
        <DialogContent>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="light"
              name="radio-buttons-group"
            >
              <FormControlLabel
                defaultValue="light"
                control={<Radio />}
                label="Light"
                checked={themeValue === "light"}
                onChange={() => setThemeValue("light")}
              />
              <FormControlLabel
                defaultValue="dark"
                control={<Radio />}
                label="Dark"
                checked={themeValue === "dark"}
                onChange={() => setThemeValue("dark")}
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTheme}>Cancel</Button>
          <Button variant="contained" onClick={handleApplyTheme}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ThemeDialog;
