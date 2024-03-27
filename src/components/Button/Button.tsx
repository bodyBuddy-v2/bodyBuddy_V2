import { Button as MuiButton, styled } from "@mui/material";

import type { ButtonProps } from "@mui/material";

export type ButtonType = {
  /** custom으로 들어올 수 있는 아이들 */
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

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
  return {
    ...(variant === "contained" && {
      background: "",
    }),
    ...(variant === "outlined" && {}),
  };
});
