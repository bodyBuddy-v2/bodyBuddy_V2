import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: "select",
    },
    size: {
      control: "radio",
    },
  },
  render: args => {
    const label = "버튼";
    return <Button {...args}>{label}</Button>;
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: ["ref", "variant"],
    },
  },
  args: {
    children: <div>라벨</div>,
  },
};

export const Playground: Story = {
  args: {},
};
