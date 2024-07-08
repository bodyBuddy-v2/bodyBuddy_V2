"use client";
import React, { forwardRef } from "react";
import { Input as MuiInput, styled } from "@mui/material";
import { InputType } from "./types";

const Input = forwardRef((props: InputType, ref) => {
  const { disableUnderline = true, ...others } = props;

  return <StyledInput ref={ref} disableUnderline={disableUnderline} {...others}></StyledInput>;
});

export default Input;

const StyledInput = styled(MuiInput)(({ theme, color }) => ({
  border: "1px solid #cdcdcd",
  borderRadius: "10px",
  paddingLeft: "10px",
  paddingTop: "4px",
  paddingBottom: "4px",

  ...(color === "error" && {
    border: `1px solid ${theme.palette.error.main}`,
  }),
  ...(color === "success" && {
    border: `1px solid ${theme.palette.success.main}`,
  }),
}));
