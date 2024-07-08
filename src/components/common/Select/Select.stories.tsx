import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";
import city from "../../../constant/common/city";
import district from "../../../constant/common/district";

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {},
  render: args => {
    const testItems = ["필라테스", "PT", "테니스"];
    return <Select {...args} items={testItems}></Select>;
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    width: 200,
    placeholder: "운동 유형",
  },
};

export const Interconnected = () => {
  const [selectCity, setSelectCity] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");

  const handleCityChange = (city: string) => {
    setSelectCity(city);
    setSelectDistrict(district[city][0]);
  };

  const handleDistrict = (district: string) => {
    setSelectDistrict(district);
  };

  return (
    <div>
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
    </div>
  );
};
