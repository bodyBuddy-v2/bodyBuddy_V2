"use client";
import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Input,
} from "@mui/material";

const SignMemberContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 30px;
`;

const SignStepGuide = styled(Box)`
  margin-top: 60px;

  .step {
    color: #858ff1;
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 16px;
  }
  .guide {
    font-size: 15px;
    color: #7d7d7d;
  }
`;
const SignMemberFormBox = styled(Box)`
  margin-bottom: auto;

  .label {
    color: #464646;
    margin-bottom: 16px;
  }

  .input-item {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
  }
`;
const SignSubmitButton = styled(Button)`
  width: 100%;
  height: 77px;
  color: #fff;
  background-color: #858ff1;
  border: none;
  justify-self: end;
`;

const SignMember = () => {
  return (
    <>
      <SignMemberContainer>
        <Box
          display={"flex"}
          flexDirection={"column"}
          fontSize={30}
          fontWeight={700}
        >
          <span>가장 쉬운 </span>
          <span>트레이닝을 시작해볼까요?</span>
        </Box>
        <SignStepGuide display={"flex"} flexDirection={"column"}>
          <span className="step">STEP 1</span>
          <span>{`간단한 기본 정보를 입력해주세요 :)`}</span>
        </SignStepGuide>
        <SignMemberFormBox>
          <FormControl fullWidth>
            <div className="input-item">
              <label id="nickname-label" className="label">
                닉네임
              </label>
              <Input placeholder="특수 문자 제외 5자 이내" />
            </div>
            <div className="input-item">
              <label id="nickname-label" className="label">
                관심 지역
              </label>
              <Box display={"flex"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                ></Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                ></Select>
              </Box>
            </div>
          </FormControl>
        </SignMemberFormBox>
        <SignSubmitButton variant="outlined"> 회원가입 </SignSubmitButton>
      </SignMemberContainer>
    </>
  );
};

export default SignMember;
