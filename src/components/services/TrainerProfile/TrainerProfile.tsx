import React from "react";
import { Flex, Tag, Image, Typography } from "antd";
import { TrainerProfileType } from "./types";
export const TrainerProfile = (props: TrainerProfileType) => {
  const { images, name, profile, category, cost } = props;
  return (
    <>
      <Flex
        gap="10px"
        vertical
        style={{
          width: "100%",
          maxHeight: "324px",
          borderRadius: 10,
          marginBottom: "12px",
          padding: "8px",
          border: "1px solid #D9D9D9",
        }}
      >
        <Flex gap="4px 0" wrap>
          <Tag bordered={false} color="blue">
            Tag 1
          </Tag>
          <Tag bordered={false}>Tag 2</Tag>
        </Flex>

        <Flex>
          <Image
            alt="트레이너 대표 이미지"
            style={{ borderRadius: 50 }}
            width="64px"
            src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
          />

          <Typography.Text style={{ marginLeft: "10px" }}>
            <span style={{ color: "#1677FF", fontWeight: "bold" }}>{name} 트레이너</span>
            <br></br>
            <span>{profile}</span>
          </Typography.Text>
        </Flex>

        <Flex justify="space-between">
          <Typography.Text> 서울시 강남구</Typography.Text>
          <Typography.Text strong style={{ color: "#1677FF" }}>
            1회 {cost} 원
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TrainerProfile;
