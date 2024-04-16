"use client";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import React, { useState } from "react";
import Select from "@/components/Select";
import city from "@/data/city";
import district from "@/data/district";

const Home: React.FC = () => {
  const [selectCity, setSelectCity] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");

  return (
    <div>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="subtitle1">subtitle1 - ex. 게시판 제목</Typography>
      <Typography variant="subtitle2">subtitle2 - ex. 상세정보, 수상경력 , 위치</Typography>
      <Typography variant="body1">body1 & div</Typography>
      <div>
        <Typography variant="body2">body2 & span</Typography>
      </div>
      <Typography variant="caption">caption - ex. 자격 및 수상 정보</Typography>
      <Button variant="outlined" color="primary">
        primary
      </Button>
      <Button variant="outlined" color="info">
        info
      </Button>
      <Select
        currentSelectedData={selectCity}
        items={city}
        label="지역"
        placeholder="지역"
        width={140}
        onSetCurrentSelected={setSelectCity}
      ></Select>
      <Select
        items={district[selectCity]}
        currentSelectedData={selectDistrict}
        placeholder="시/군/구"
        label="구"
        width={150}
        onSetCurrentSelected={setSelectDistrict}
      ></Select>
      {selectCity}
      {selectDistrict}
    </div>
  );
};

export default Home;
