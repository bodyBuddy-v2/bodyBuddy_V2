"use client";

import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Button, Typography } from "@/components";

const SignUpType = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ height: "100%", position: "relative" }}>
        <LeftDoubleSideCircle />
        <Box display="flex" justifyContent="center" alignItems="end" flexDirection="column" pt={20}>
          <Typography variant="h1">
            <Typography variant="body2" color="primary" fontSize={"66px"} sx={{ fontWeight: "bold" }}>
              손흥민
            </Typography>
            님
          </Typography>
          <Typography variant="h1">반갑습니다.</Typography>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" mt={"auto"} pb={6}>
          <Typography variant="subtitle1">{`회원가입 유형을 선택해주세요 :)`}</Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "114px",
              borderRadius: "12px",
              "background-color": "#70B4E0",
              marginTop: 2,
              fontSize: "30px",
            }}
          >
            일반회원
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "114px",
              borderRadius: "12px",
              "background-color": "#858FF1",
              marginTop: 2,
              fontSize: "30px",
            }}
          >
            트레이너
          </Button>
        </Box>
      </Box>
    </>
  );
};

const LeftDoubleSideCircle = styled.div`
  position: absolute;
  background-image: url("/assets/signUp/leftDoubleCircle.svg");
  width: 141px;
  height: 500px;
  background-size: cover;
  z-index: 0;
`;

export default SignUpType;
