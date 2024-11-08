import { PropsWithChildren } from "react";
import { Flex, Space, Typography } from "antd";

type TrainerSingUpLayoutProps = {
  currentStep: number;
} & PropsWithChildren;

const TrainerSignUpLayout = ({ children, currentStep }: TrainerSingUpLayoutProps) => {
  const comments = ["간단한 기본 정보를 입력해주세요 :)", "상세 정보를 입력해주세요 :)"];

  return (
    <Space direction="vertical">
      <Typography.Title level={2}>
        <span>훌륭한</span>
        <span style={{ color: "#1677FF" }}> 트레이너님</span>
        <br />
        <span>{`반갑습니다 :)`}</span>
      </Typography.Title>

      <Typography.Text strong style={{ color: "#1677FF", fontSize: "30px" }}>
        STEP {currentStep}
      </Typography.Text>
      <Typography.Text style={{ fontSize: "12px", color: "#7D7D7D" }}>{comments[currentStep - 1]}</Typography.Text>
      <Flex vertical style={{ height: "100%" }}>
        {children}
      </Flex>
    </Space>
  );
};

export default TrainerSignUpLayout;
