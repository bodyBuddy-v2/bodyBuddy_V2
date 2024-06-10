"use client";
import { Input as MuiInput, styled } from "@mui/material";
import { InputType } from "./types";

const Input = (props: InputType) => {
  const { disableUnderline = true, ...others } = props;

  return <StyledInput disableUnderline={disableUnderline} {...others}></StyledInput>;
};

export default Input;

const StyledInput = styled(MuiInput)`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
