"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Box } from "@mui/material";
import { Button, Typography } from "antd";

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
      <Box display="flex" alignItems="center" flexDirection="column" mt={"auto"} pb={7}>
        <Typography>SNS로 간편하게 로그인 하세요 !</Typography>
        <Button size="large" onClick={() => handleSubmit("kakao")}>
          카카오로 시작하기
        </Button>
        <Button size="large" onClick={() => handleSubmit("naver")}>
          네이버로 시작하기
        </Button>
      </Box>
    </>
  );
};

export default SignIn;
