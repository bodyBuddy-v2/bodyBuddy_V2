"use client";
import { ButtonProps, Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

export interface ButtonType extends ButtonProps {
  children?: React.ReactNode;
}

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
