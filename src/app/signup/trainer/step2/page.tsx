"use client";
import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { Input, Typography, UploadImage, Button } from "@/components";

const SignTrainerStep2 = () => {
  const exerciseList = ["필라테스", "PT", "테니스"];

  const [imageList, setImageList] = useState<File[]>([]);
  const [selectExercise, setselectExercise] = useState<string>("");

  const handleProfileChange = (values: File[]) => {
    setImageList(values);
  };
  const handleSelectExercise = (exercise: string) => {
    setselectExercise(exercise);
  };

  return (
    <>
      <Box height="100%" display={"flex"} flexDirection={"column"} mb={5}>
        <Box display={"flex"} flexDirection={"column"} mt={3}>
          <Typography variant="h4" color="primary">
            STEP 2
          </Typography>
          <Typography variant="subtitle1">근무하시는 트레이닝장 위치를 적어주세요!</Typography>
        </Box>
        <SignMemberFormBox>
          <FormControl fullWidth>
            <div className="input-item">
              <label id="nickname-label" className="label">
                트레이닝장 이름
              </label>
              <Input placeholder="특수 문자 제외 작성" />
            </div>
            <div className="input-item">
              <label id="nickname-label" className="label">
                트레이닝장 대표사진
              </label>
              <Typography variant="body2">{`회원들에게 시설을 보여줄 수 있는 사진으로 업로드해주세요 :)`} </Typography>
              <UploadImage images={imageList} onChangeValue={handleProfileChange} />
            </div>
            <div className="input-item">
              <label id="nickname-label" className="label">
                트레이닝장 위치
              </label>
              <Input fullWidth />
            </div>
          </FormControl>
        </SignMemberFormBox>
        <Link href="/signup/trainer/step3">
          <Button variant="contained" fullWidth sx={{ height: "70px" }}>
            다음
          </Button>
        </Link>
      </Box>
    </>
  );
};

const SignMemberFormBox = styled(Box)`
  margin-bottom: auto;

  .label {
    color: #464646;
  }

  .input-item {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;
export default SignTrainerStep2;
