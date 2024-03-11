"use client";

import React from "react";
import { Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import leftdouble from "/public/assets/signUp/leftDoubleCircle.svg";

const TypeContainer = styled(Box)`
  position: relative;
  height: 100%;
`;
const UserTitle = styled(Box)`
  font-size: 55px;
  padding-top: 30%;
`;

const LeftDoubleSideCircle = styled.div`
  position: absolute;
  background-image: url(${leftdouble.src});
  width: 141px;
  height: 500px;
  background-size: cover;
  z-index: 0;
`;

const UserName = styled.span`
  color: #858ff1;
  font-weight: bold;
`;

const TypeButtonBox = styled(Box)`
  margin-top: auto;
  width: 100%;
  padding-bottom: 50px;
`;

const TypeGuide = styled.div`
  color: #626262;
  font-size: 14px;
`;

const TypeButton = styled(Button)`
  width: 100%;
  height: 114px;
  border-color: transparent;
  border-radius: 12px;
  font-size: 30px;
  margin-top: 16px;
`;

const SignUpType = () => {
  return (
    <>
      <TypeContainer display="flex" flexDirection="column">
        <LeftDoubleSideCircle />
        <UserTitle
          display="flex"
          justifyContent="center"
          alignItems="end"
          flexDirection="column"
        >
          <span>
            <UserName>손흥민</UserName>님
          </span>
          <span>반갑습니다.</span>
        </UserTitle>
        <TypeButtonBox
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <TypeGuide>{`회원가입 유형을 선택해주세요 :)`}</TypeGuide>
          <TypeButton
            variant="contained"
            sx={{ "background-color": "#70B4E0" }}
          >
            일반회원
          </TypeButton>
          <TypeButton
            variant="contained"
            sx={{ "background-color": "#858FF1" }}
          >
            트레이너
          </TypeButton>
        </TypeButtonBox>
      </TypeContainer>
    </>
  );
};

export default SignUpType;
