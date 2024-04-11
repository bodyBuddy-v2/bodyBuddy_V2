"use client";
import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";
import type { ButtonProps } from "@mui/material";

export type ButtonType = {
  children?: React.ReactNode;
} & ButtonProps;

const Button = (props: ButtonType) => {
  const { variant = "contained", disabled = false, size = "medium", children, ...others } = props;

  return (
    <StyledButton variant={variant} disabled={disabled} size={size} {...others}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MuiButton)(({ variant }) => {
  return {
    ...(variant === "contained" && {
      background: "",
    }),
    ...(variant === "outlined" && {}),
  };
});
