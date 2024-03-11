"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import exercise from "/public/assets/signUp/signUpExercise.svg";
import rightSide from "/public/assets/signUp/rightSideCircle.svg";
import leftSide from "/public/assets/signUp/leftSideCircle.svg";
import KakaoLogo from "@/components/svg/KakaLog";
import NaverLogo from "@/components/svg/NaverLogo";

type LoginButtonType = {
  name: string;
};

const SignUpContainer = styled.div`
  position: relative;
  height: auto;
`;

const Exercise = styled.div`
  background-image: url(${exercise.src});
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
  background-image: url(${leftSide.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const RightSideCircle = styled.div`
  position: absolute;
  width: 102px;
  height: 275px;
  right: 0;
  top: 0;
  background-image: url(${rightSide.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const OAuthButtonBox = styled(Box)`
  margin-top: auto;
  width: 100%;
  padding-bottom: 50px;
`;

const OAuthButton = styled(Button)`
  position: relative;
  width: 100%;
  height: 50px;
  border-color: transparent;
  border-radius: 12px;
  ${(props: LoginButtonType) => {
    return props.name === "Kakao"
      ? {
          color: "#3D3D3D",
          backgroundColor: "#FEE500",
          marginTop: "14px",
        }
      : { color: "#FFFFFF", backgroundColor: "#4FA42B", marginTop: "10px" };
  }};
`;

const SignUp = () => {
  return (
    <>
      <SignUpContainer>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ fontSize: 30, paddingTop: 10 }}
        >
          <span>쉬운 1:1</span>
          <span style={{ color: "#858FF1" }}>트레이닝의 시작</span>
        </Box>
        <LeftSideCircle />
        <Exercise />
        <RightSideCircle />
      </SignUpContainer>
      <OAuthButtonBox display="flex" alignItems="center" flexDirection="column">
        <OAuthButton
          name="Kakao"
          startIcon={<KakaoLogo />}
          variant="outlined"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          카카오로 시작하기
        </OAuthButton>
        <OAuthButton
          name="naver"
          startIcon={<NaverLogo />}
          variant="outlined"
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          네이버로 시작하기
        </OAuthButton>
      </OAuthButtonBox>
    </>
  );
};

export default SignUp;
