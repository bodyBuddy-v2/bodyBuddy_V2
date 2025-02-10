"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import React from "react";
import { Button, Flex, Typography } from "antd";

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
      <Flex vertical justify="center" align="center" style={{ flex: 1, padding: "52px" }}>
        <Typography.Title level={1}>
          <span>쉬운 1:1</span>
          <br></br>
          <span style={{ color: "#1677FF" }}>트레이닝</span> 의 시작
        </Typography.Title>
      </Flex>
      <Flex vertical style={{ width: "100%", padding: "58px" }}>
        <Typography style={{ color: "#7D7D7D", fontSize: "12px", textAlign: "center" }}>
          혹시 강사님이신가요?
          <Typography.Text underline style={{ color: "#7D7D7D", fontSize: "12px" }}>
            <Link href="/signup/trainer" style={{ color: "#7D7D7D" }}>
              강사님 가입
            </Link>
          </Typography.Text>
        </Typography>
        <Button
          type="primary"
          size="large"
          name="Kakao"
          style={{
            height: "50px",
            width: "100%",
            borderRadius: "12px",
            backgroundColor: "#FEE500",
            marginTop: "14px",
          }}
          onClick={() => handleSubmit("kakao")}
        >
          카카오로 시작하기
        </Button>
        <Button
          name="naver"
          type="primary"
          size="large"
          style={{
            height: "50px",
            width: "100%",
            borderRadius: "12px",
            backgroundColor: "#4FA42B",
            marginTop: "10px",
          }}
          onClick={() => handleSubmit("naver")}
        >
          네이버로 시작하기
        </Button>
      </Flex>
    </>
  );
};

export default SignUp;
