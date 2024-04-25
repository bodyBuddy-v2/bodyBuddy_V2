"use client";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import React, { useState } from "react";
import Select from "@/components/Select";
import MultiSelect from "@/components/MultiSelect";
import city from "@/data/city";
import district from "@/data/district";

const muitiItems: string[] = ["필라테스", "PT", "테니스"];

const Home: React.FC = () => {
  const [selectPlays, setSelectPlay] = useState<string[]>([]);
  const [selectCity, setSelectCity] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");

  const handleCityChange = (city: string) => {
    setSelectCity(city);
    setSelectDistrict(district[city][0]);
  };

  const handleDistrict = (district: string) => {
    setSelectDistrict(district);
  };

  const handlePlays = (plays: string[]) => {
    setSelectPlay(plays);
  };

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
        placeholder="지역"
        width={140}
        onChangeValue={handleCityChange}
      ></Select>

      <Select
        currentSelectedData={selectDistrict}
        items={district[selectCity]}
        placeholder="시/군/구"
        width={140}
        onChangeValue={handleDistrict}
      ></Select>
      <MultiSelect items={muitiItems} placeholder="운동을 선택해봐" onChange={handlePlays} />
    </div>
  );
};

export default Home;
