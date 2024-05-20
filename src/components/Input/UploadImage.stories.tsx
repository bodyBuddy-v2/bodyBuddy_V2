import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UploadImage from "./UploadImage";

const meta: Meta<typeof UploadImage> = {
  component: UploadImage,
  argTypes: {},
  render: args => {
    return <UploadImage {...args}></UploadImage>;
  },
};

export default meta;

export const Default = () => {
  const [imageList, setImageList] = useState<File[]>([]);

  const handleChange = (values: File[]) => {
    setImageList(values);
  };

  return <UploadImage images={imageList} onChangeValue={handleChange} />;
};
