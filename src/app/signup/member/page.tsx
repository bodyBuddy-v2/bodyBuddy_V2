"use client";
import { useState } from "react";
import styled from "@emotion/styled";
import { Box, FormControl } from "@mui/material";
import { Select, Input, Typography, Button } from "@/components";

import city from "@/constant/common/city";
import district from "@/constant/common/district";

const SignMember = () => {
  const [selectCity, setSelectCity] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");

  const handleCityChange = (city: string) => {
    setSelectCity(city);
    setSelectDistrict(district[city][0]);
  };

  const handleDistrict = (district: string) => {
    setSelectDistrict(district);
  };

  return (
    <>
      <Box height="100%" display={"flex"} flexDirection={"column"} mt={4}>
        <Box display={"flex"} flexDirection={"column"} fontSize={30} fontWeight={700}>
          <Typography variant="h3">
            <Typography variant="body1" sx={{ fontSize: "44px", fontWeight: "bold" }}>
              가장 쉬운
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "44px", fontWeight: "bold" }}>
              트레이닝 시작해볼까요?
            </Typography>
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} mt={8}>
          <Typography variant="h4" color="primary">
            STEP 1
          </Typography>
          <Typography variant="subtitle1">{`간단한 기본 정보를 입력해주세요 :)`}</Typography>
        </Box>
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
              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Select
                  currentSelectedData={selectCity}
                  items={city}
                  placeholder="지역"
                  height={38}
                  width={240}
                  onChangeValue={handleCityChange}
                ></Select>
                <Select
                  currentSelectedData={selectDistrict}
                  items={district[selectCity]}
                  placeholder="시/군/구"
                  height={38}
                  width={240}
                  onChangeValue={handleDistrict}
                ></Select>
              </Box>
            </div>
          </FormControl>
        </SignMemberFormBox>
        <Button variant="contained" fullWidth sx={{ height: "77px" }}>
          회원가입
        </Button>
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
    margin-top: 18px;
  }
`;

export default SignMember;
