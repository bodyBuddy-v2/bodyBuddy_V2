"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Box } from "@mui/material";
import { Button, Typography } from "@/components";
import styled from "@emotion/styled";
import KakaoLogo from "@/components/svg/KakaLog";
import NaverLogo from "@/components/svg/NaverLogo";

const SignUp = () => {
  const handleSubmit = (name: string) => {
    signIn(name, {
      redirect: true,
      callbackUrl: "/",
    })
      .then(result => {
        if (!result) throw new Error("Sign in failed");
      })
      .catch(() => {});
  };
  return (
    <>
      <Box sx={{ height: "auto", position: "relative" }}>
        <Box display="flex" flexDirection="column" pt={10} pl={2} sx={{ fontSize: 30 }}>
          <Typography variant="h2">
            <Typography variant="body1" sx={{ fontSize: "58px", fontWeight: 500 }}>
              가장 쉬운
            </Typography>
            <Typography variant="body1" color="primary" sx={{ fontSize: "58px", fontWeight: 500 }}>
              트레이닝 시작
            </Typography>
          </Typography>
        </Box>
        <LeftSideCircle />
        <Exercise />
        <RightSideCircle />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" mt={"auto"} pb={7}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          name="Kakao"
          sx={{ height: "50px", borderRadius: "12px", backgroundColor: "#FEE500", marginTop: "14px" }}
          startIcon={<KakaoLogo />}
          onClick={() => handleSubmit("kakao")}
        >
          카카오로 시작하기
        </Button>
        <Button
          name="naver"
          fullWidth
          sx={{ height: "50px", borderRadius: "12px", backgroundColor: "#4FA42B", marginTop: "10px" }}
          startIcon={<NaverLogo />}
          variant="contained"
          onClick={() => handleSubmit("naver")}
        >
          네이버로 시작하기
        </Button>
      </Box>
    </>
  );
};

const Exercise = styled.div`
  background-image: url("/assets/signUp/signUpExercise.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 400px;
`;
const LeftSideCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 316px;
  left: 0;
  top: 190px;
  background-image: url("/assets/signUp/leftSideCircle.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const RightSideCircle = styled.div`
  position: absolute;
  width: 102px;
  height: 275px;
  right: 0;
  top: 0;
  background-image: url("/assets/signUp/rightSideCircle.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default SignUp;
