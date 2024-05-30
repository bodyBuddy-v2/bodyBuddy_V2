"use client";
import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import Link from "next/link";
import { InputItem } from "../member/page";
import { Input, Typography, UploadImage, Select, Button } from "@/components";

const SignTrainer = () => {
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
            STEP 1
          </Typography>
          <Typography variant="subtitle1">트레이너님에 대해 알려주세요!</Typography>
        </Box>
        <Box mb="auto">
          <FormControl fullWidth>
            <InputItem>
              <label id="nickname-label" style={{ color: "#464646" }}>
                종목 및 분야
              </label>
              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Select
                  items={exerciseList}
                  placeholder="종목"
                  width={240}
                  currentSelectedData={selectExercise}
                  onChangeValue={handleSelectExercise}
                ></Select>
                <Select
                  items={exerciseList}
                  placeholder="분야"
                  width={240}
                  currentSelectedData={selectExercise}
                  onChangeValue={handleSelectExercise}
                ></Select>
              </Box>
            </InputItem>
            <InputItem>
              <label id="nickname-label" style={{ color: "#464646" }}>
                프로필 사진
              </label>
              <Typography variant="body2">{`트레이너님을 대표 할 수 있는 사진을 업로드 해주세요 :)`} </Typography>
              <UploadImage images={imageList} onChangeValue={handleProfileChange} />
            </InputItem>
            <InputItem>
              <label id="nickname-label" style={{ color: "#464646" }}>
                프로필 코멘트
              </label>
              <Input fullWidth sx={{ height: "60px" }} />
            </InputItem>
          </FormControl>
        </Box>
        <Link href="/signup/trainer/step2">
          <Button variant="contained" fullWidth sx={{ height: "70px" }}>
            다음
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SignTrainer;
