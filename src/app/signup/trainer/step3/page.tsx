"use client";
import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { Input, Typography, Button, Select, UploadImage } from "@/components";

const SignTrainerStep3 = () => {
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
            STEP 3
          </Typography>
          <Typography variant="subtitle1">{`트레이너님의 경력을 알 수 있는 자격증을 업로드해주세요 :)`}</Typography>
        </Box>
        <SignMemberFormBox>
          <FormControl fullWidth>
            <div className="input-item">
              <label id="nickname-label" className="label">
                1:1 트레이닝 비용
              </label>
              <Input placeholder="특수 문자 제외 작성" />
            </div>
            <div className="input-item">
              <label id="nickname-label" className="label">
                경력 시작
              </label>
              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Select
                  items={exerciseList}
                  placeholder="년"
                  width={240}
                  currentSelectedData={selectExercise}
                  onChangeValue={handleSelectExercise}
                ></Select>
                <Select
                  items={exerciseList}
                  placeholder="월"
                  width={240}
                  currentSelectedData={selectExercise}
                  onChangeValue={handleSelectExercise}
                ></Select>
              </Box>
            </div>
            <div className="input-item">
              <label id="nickname-label" className="label">
                자격 및 수상
              </label>
              <Typography variant="body2">{`트레이너님을 대표 할 수 있는 사진을 업로드 해주세요 :)`} </Typography>

              <Box display={"flex"} justifyContent={"space-between"} mt={2} alignItems="center">
                <UploadImage images={imageList} onChangeValue={handleProfileChange} />
                <Input fullWidth sx={{ height: "65px" }}></Input>
              </Box>
            </div>
          </FormControl>
        </SignMemberFormBox>
        <Link href="/signup/trainer/step2">
          <Button variant="contained" fullWidth sx={{ height: "70px" }}>
            회원가입 신청
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
export default SignTrainerStep3;
