"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface InputTextProps {
  label: string;
  name: string;
}

export function InputText({ label, name }: InputTextProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Stack direction="column" gap={1}>
      <TextField label={label} {...register(name)} />
      {errors && errors[name] ? (
        <Typography sx={{ color: "red"}}>
          {String(errors[name]?.message)}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
