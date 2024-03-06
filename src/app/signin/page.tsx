"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import fullLogo from "/public/assets/fullLogo.svg";
import KakaoLogo from "@/components/svg/KakaLog";
import NaverLogo from "@/components/svg/NaverLogo";

type LoginButtonType = {
  name: string;
};
const BodyBuddyLogo = styled.h1`
  padding-top: 55%;
  text-align: center;
`;

const LoginGuide = styled.div`
  color: #626262;
  font-size: 14px;
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

  /* .MuiButton-startIcon svg {
    position: absolute;
    top: 15px;
    left: 18px;
  } */
`;

const SignIn = () => {
  return (
    <>
      <BodyBuddyLogo>
        <Image
          src={fullLogo}
          alt="바디버디 로고"
          title="바디버디"
          width={194}
          height={132}
        />
        {/* <span className="srOnly">바디버디</span> */}
      </BodyBuddyLogo>
      <OAuthButtonBox display="flex" alignItems="center" flexDirection="column">
        <LoginGuide>SNS로 간편 로그인하세요!</LoginGuide>
        <OAuthButton
          name="Kakao"
          startIcon={<KakaoLogo />}
          variant="outlined"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          카카오로 로그인하기
        </OAuthButton>
        <OAuthButton
          name="naver"
          startIcon={<NaverLogo />}
          variant="outlined"
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          네이버로 로그인하기
        </OAuthButton>
      </OAuthButtonBox>
    </>
  );
};

export default SignIn;
