"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Box } from "@mui/material";
import { Typography } from "antd";

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
          <Typography>
            <Typography>가장 쉬운</Typography>
            <Typography>트레이닝 시작</Typography>
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" mt={"auto"} pb={7}>
        {/* <Button
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
        </Button> */}
      </Box>
    </>
  );
};

export default SignUp;
