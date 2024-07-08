"use client";
import { Box, styled } from "@mui/material";
import { IDefaultProps } from "./types";

const BoxSection = styled(Box)({
  height: "100vh",
  margin: "0 auto",
  backgroundColor: "white",
  padding: "16px",
});

const StyledLayout = ({ children }: IDefaultProps) => {
  return (
    <>
      <BoxSection display="flex" flexDirection="column">
        {children}
      </BoxSection>
    </>
  );
};

export default StyledLayout;
