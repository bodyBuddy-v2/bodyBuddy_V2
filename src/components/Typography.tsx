"use client";
import { Typography as MuiTypography, styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";

export type TypographyType = {} & TypographyProps;

const Typography = (props: TypographyProps) => {
  const { children, ...others } = props;

  return <StyledTypography {...others}>{children}</StyledTypography>;
};

export default Typography;

const StyledTypography = styled(MuiTypography)(({ variant }) => {
  return {
    ...(variant === "h1" && { fontWeight: 700, fontSize: "18px" }),
    ...(variant === "h2" && { fontWeight: 400, fontSize: "12px" }),
    ...(variant === "h3" && { fontWeight: 700, fontSize: "30px" }),
    ...(variant === "subtitle1" && { fontWeight: 800, fontSize: "16px" }),
    ...(variant === "subtitle2" && { fontWeight: 800, fontSize: "14px" }),
    ...(variant === "button" && { fontWeight: 700, fontSize: "20px" }),
    ...(variant === "caption" && { fontWeight: 400, fontSize: "12px" }),
  };
});
