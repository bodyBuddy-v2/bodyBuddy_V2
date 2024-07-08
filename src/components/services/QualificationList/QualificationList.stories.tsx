import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { QualificationList } from "./QualificationList";

const meta: Meta<typeof QualificationList> = {
  component: QualificationList,
  argTypes: {},
  render: args => {
    return <QualificationList {...args}></QualificationList>;
  },
};

export default meta;
type Story = StoryObj<typeof QualificationList>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: [],
    },
  },

  args: {
    items: [
      { url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD…JaH0VKjSoQVOjThSpx2hTioRXyikr93u+pv1wGgUAFAD/2Q==" },
    ],
  },
};
