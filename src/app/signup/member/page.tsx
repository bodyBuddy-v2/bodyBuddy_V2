"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
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
        <Box mb="auto">
          <FormControl fullWidth>
            <InputItem>
              <label id="nickname-label" style={{ color: "#464646" }}>
                닉네임
              </label>
              <Input placeholder="특수 문자 제외 5자 이내" />
            </InputItem>
            <InputItem>
              <label id="nickname-label" style={{ color: "P#464646" }}>
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
            </InputItem>
          </FormControl>
        </Box>
        <Button variant="contained" fullWidth sx={{ height: "77px" }}>
          회원가입
        </Button>
      </Box>
    </>
  );
};

export const InputItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "18px",
});
export default SignMember;
