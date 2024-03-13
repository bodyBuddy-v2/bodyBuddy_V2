"use client";

import React, { useRef, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

const SignIn = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div>
        <span>SNS로 간편하게 로그인 혹은 가입하세요 !</span>
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          카카오로 로그인하기
        </Button>
        <Button variant="outlined" onClick={() => signOut()}>
          카카오 로그아웃
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          네이버 로그인하기
        </Button>
        <Button variant="outlined" onClick={() => signOut()}>
          네이버 로그아웃
        </Button>
      </div>
    </>
  );
};

export default SignIn;
