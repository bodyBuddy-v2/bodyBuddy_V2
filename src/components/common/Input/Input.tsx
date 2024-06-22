"use client";
import React, { forwardRef } from "react";
import { Input as MuiInput, styled } from "@mui/material";
import { InputType } from "./types";

const Input = forwardRef((props: InputType, ref) => {
  const { disableUnderline = true, ...others } = props;

  return <StyledInput ref={ref} disableUnderline={disableUnderline} {...others}></StyledInput>;
});

export default Input;

const StyledInput = styled(MuiInput)`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
