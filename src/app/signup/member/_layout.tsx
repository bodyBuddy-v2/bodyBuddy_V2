import { PropsWithChildren } from "react";
import { Flex, Typography } from "antd";

type MemberSingUpLayoutProps = {
  currentStep: number;
} & PropsWithChildren;

const MemberSignUpLayout = ({ children, currentStep }: MemberSingUpLayoutProps) => {
  const comments: string[] = [
    "간단한 기본 정보를 입력해주세요",
    "상세 정보를 입력해주세요",
    "원하시는 운동 정보를 입력해 주세요",
  ];

  return (
    <Flex vertical style={{ height: "100%", flex: "auto" }}>
      <Typography.Title level={2}>
        <span>가장 쉬운</span>
        <br></br>
        <span style={{ color: "#1677FF" }}>트레이닝</span> 시작해볼까요?
      </Typography.Title>
      <Typography.Text strong style={{ color: "#1677FF", fontSize: "30px" }}>
        STEP {currentStep}
      </Typography.Text>
      <Typography.Text style={{ fontSize: "12px", color: "#7D7D7D" }}>{`${comments[currentStep]} :)`}</Typography.Text>
      <Flex vertical style={{ height: "100%" }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default MemberSignUpLayout;
