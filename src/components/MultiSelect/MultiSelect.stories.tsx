import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import MultiSelect from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  argTypes: {},
  render: args => {
    const testItems = ["필라테스", "PT", "테니스"];

    return <MultiSelect {...args} items={testItems}></MultiSelect>;
  },
};

export default meta;

export const Default = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <MultiSelect
      items={["필라테스", "PT", "테니스"]}
      placeholder="운동 유형"
      currentSelectedData={selectedValues}
      onChangeValue={handleChange}
    />
  );
};
