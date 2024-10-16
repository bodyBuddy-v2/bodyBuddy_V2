import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TrainerProfile from "./TrainerProfile";
import { TrainerProfileType } from "./types";

const meta: Meta<typeof TrainerProfile> = {
  component: TrainerProfile,
  argTypes: {},
  render: args => {
    return <TrainerProfile {...args}></TrainerProfile>;
  },
};

export default meta;
type Story = StoryObj<typeof TrainerProfile>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: [],
    },
  },

  args: {},
};

export const TrainerProfileList = () => {
  const [TestList, setTestList] = useState<TrainerProfileType[]>([
    {
      images: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      name: "황재민",
      profile: "매우 반복적인 식단, 지겨우셨죠?",
      category: "PT",
      cost: "15,000",
    },
    {
      images: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      name: "황세민",
      profile: "매우 반복적인 식단, 그게 답이다",
      category: "PT",
      cost: "25,000",
    },
  ]);

  return (
    <>
      <>
        {TestList.map((list, index) => (
          <TrainerProfile
            key={index}
            images={list.images}
            name={list.name}
            profile={list.profile}
            category={list.category}
            cost={list.cost}
          />
        ))}
      </>
    </>
  );
};
