import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UploadImage from "./UploadImage";

const meta: Meta<typeof UploadImage> = {
  component: UploadImage,
  argTypes: {},
  render: args => {
    return <UploadImage {...args}></UploadImage>;
  },
};

export default meta;
type Story = StoryObj<typeof UploadImage>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: [],
    },
  },

  args: {
    width: 500,
    height: 500,
    images: [],
  },
};
