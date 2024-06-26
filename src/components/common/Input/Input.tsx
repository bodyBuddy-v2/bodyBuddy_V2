"use client";
import React, { forwardRef } from "react";
import { Input as MuiInput, styled } from "@mui/material";
import { InputType } from "./types";

const Input = forwardRef((props: InputType, ref) => {
  const { disableUnderline = true, ...others } = props;

  return <StyledInput ref={ref} disableUnderline={disableUnderline} {...others}></StyledInput>;
});

export default Input;

const StyledInput = styled(MuiInput)(({ theme }) => ({
  border: "1px solid #cdcdcd",
  borderRadius: "10px",
  paddingLeft: "10px",
  paddingTop: "4px",
  paddingBottom: "4px",

  "&.Mui-error": {
    border: `1px solid #F90C0C`,
  },
}));
