"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Box } from "@mui/material";
import { Button, Typography } from "@/components";
import Image from "next/image";
import KakaoLogo from "@/components/svg/KakaLog";
import NaverLogo from "@/components/svg/NaverLogo";

const SignIn = () => {
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
      <Typography variant="h1" align="center" sx={{ paddingTop: "55%" }}>
        <Image src="/assets/fullLogo.svg" alt="바디버디 로고" title="바디버디" width={194} height={132} />
        <span className="srOnly">바디버디</span>
      </Typography>
      <Box display="flex" alignItems="center" flexDirection="column" mt={"auto"} pb={7}>
        <Typography variant="subtitle2">SNS로 간편 로그인하세요!</Typography>
        <Button
          variant="contained"
          fullWidth
          size="large"
          name="Kakao"
          sx={{ height: "50px", borderRadius: "12px", backgroundColor: "#FEE500", marginTop: "14px" }}
          startIcon={<KakaoLogo />}
          onClick={() => handleSubmit("kakao")}
        >
          카카오로 로그인하기
        </Button>
        <Button
          name="naver"
          fullWidth
          sx={{ height: "50px", borderRadius: "12px", backgroundColor: "#4FA42B", marginTop: "10px" }}
          startIcon={<NaverLogo />}
          variant="contained"
          onClick={() => handleSubmit("naver")}
        >
          네이버로 로그인하기
        </Button>
      </Box>
    </>
  );
};

export default SignIn;
