import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

type ContainerType = {
  children: React.ReactNode;
};

const BoxSection = styled(Box)`
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  padding: 16px;
`;

const StyledLayout = ({ children }: ContainerType) => {
  return (
    <>
      <BoxSection display="flex" flexDirection="column">
        {children}
      </BoxSection>
    </>
  );
};

export default StyledLayout;
