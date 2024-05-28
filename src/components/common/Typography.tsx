"use client";
import { Typography as MuiTypography, styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";

export type TypographyType = {
  children?: React.ReactNode;
  fontWeight?: number;
} & TypographyProps;

const Typography = (props: TypographyProps) => {
  const { children, ...others } = props;

  return <StyledTypography {...others}>{children}</StyledTypography>;
};

export default Typography;

const StyledTypography = styled(MuiTypography)(({ variant }) => {
  return {
    ...(variant === "h1" && { fontSize: "66px" }),
    ...(variant === "h2" && { fontSize: "54px" }),
    ...(variant === "h3" && { fontSize: "42px" }),
    ...(variant === "h4" && { fontSize: "28px" }),
    ...(variant === "h5" && { fontSize: "18px" }),
    ...(variant === "h6" && { fontSize: "14px" }),
  };
});
