import type { Meta, StoryObj } from "@storybook/react";
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

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    width: 200,
    placeholder: "운동 유형",
  },
};
