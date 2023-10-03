import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextField = ({ name, helperText, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            fullWidth
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            error={!!error}
            helperText={error ? error.message : helperText}
            {...other}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
