"use client";
import { useState } from "react";
import { Select, Input, Typography, Button, Space, Form, Radio, Flex, Row, Col, Checkbox } from "antd";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormKey } from "@/constant/common/formKey";
import { signUpFormSchema } from "@/schema/signup/signUpFormSchema";
import { district, city, exerciseList, fieldList, type OptionValue } from "@/constant/common/signup";

interface IMemberFormData {
  [UserFormKey.NICKNAME]: string;
  [UserFormKey.CELLPHONE]: string;
  [UserFormKey.SEX]: string;
  [UserFormKey.AGE]: string;
  [UserFormKey.CITY]: string;
  [UserFormKey.DISTRICT]: string;
  [UserFormKey.GOALS]: string[];
  [UserFormKey.CATEGORY]: string[];
}

interface StepProps {
  next?: () => void;
  prev?: () => void;
}

const Step1 = ({ next }: StepProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IMemberFormData>();

  return (
    <>
      <Controller
        name={UserFormKey.NICKNAME}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Typography>닉네임</Typography>
              <Input {...field} placeholder="특수 문자 제외(2~5글자)" status={fieldState.error && "error"} />
            </Form.Item>
          </>
        )}
      />
      <Controller
        name={UserFormKey.CELLPHONE}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Typography>핸드폰 번호</Typography>
              <Input {...field} placeholder="핸드폰 번호 입력" status={fieldState.error && "error"} />
            </Form.Item>
          );
        }}
      ></Controller>
      <Form.Item>
        <Button
          disabled={Boolean(errors[UserFormKey.NICKNAME]) || Boolean(errors[UserFormKey.CELLPHONE])}
          style={{ width: "100%" }}
          type="primary"
          size="large"
          onClick={next}
          htmlType="submit"
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

const Step2 = ({ next }: StepProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IMemberFormData>();
  const [districtOptions, setDistrictOptions] = useState<OptionValue[]>([]);

  return (
    <>
      <Controller
        name={UserFormKey.SEX}
        control={control}
        render={({ field }) => (
          <Form.Item>
            <Typography> 성별 </Typography>
            <Radio.Group {...field}>
              <Radio value="male">남성</Radio>
              <Radio value="female">여성</Radio>
            </Radio.Group>
          </Form.Item>
        )}
      />
      <Controller
        name={UserFormKey.AGE}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Typography>나이</Typography>
              <Input {...field} suffix="세" placeholder="숫자만 입력가능" status={fieldState.error && "error"} />
            </Form.Item>
          );
        }}
      ></Controller>

      <Typography>관심 지역</Typography>
      <Flex gap="large">
        <Controller
          name={UserFormKey.CITY}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Select
                options={city}
                style={{ minWidth: "160px" }}
                ref={field.ref}
                placeholder="지역"
                onChange={(value: string) => {
                  setDistrictOptions(district[value]);
                  field.onChange(value);
                }}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          )}
        ></Controller>
        <Controller
          name={UserFormKey.DISTRICT}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Select
                style={{ minWidth: "160px" }}
                options={districtOptions}
                placeholder="시/군"
                onChange={field.onChange}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          )}
        />
      </Flex>
      <Form.Item>
        <Button
          disabled={
            Boolean(errors[UserFormKey.AGE]) ||
            Boolean(errors[UserFormKey.CITY]) ||
            Boolean(errors[UserFormKey.DISTRICT])
          }
          style={{ paddingTop: "auto", width: "100%" }}
          type="primary"
          size="large"
          onClick={next}
          htmlType="submit"
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

const Step3 = ({ prev }: StepProps) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<IMemberFormData>();
  const watchedGoals = watch(UserFormKey.GOALS);
  const watchedCategory = watch(UserFormKey.CATEGORY);

  return (
    <>
      <Space align="start" direction="vertical" style={{ width: "100%" }}>
        <Controller
          name={UserFormKey.GOALS}
          control={control}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors[UserFormKey.GOALS] ? "error" : ""}
              help={errors[UserFormKey.GOALS] ? errors[UserFormKey.GOALS]?.message : ""}
            >
              <Typography.Text strong>운동 목적</Typography.Text>
              <Typography style={{ fontSize: "12px", color: "#7D7D7D", paddingBottom: "10px" }}>
                최대 2개가 선택 가능합니다.
              </Typography>
              <Checkbox.Group
                {...field}
                style={{ background: "rgba(0,0,0,0.1)", minHeight: "100px", paddingLeft: "15px", borderRadius: "2px" }}
              >
                <Row justify="space-around" align="middle">
                  {fieldList.map(option => (
                    <Col span={12} key={option.value}>
                      <Checkbox value={option.value}>{option.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          )}
        />
        <Controller
          name={UserFormKey.CATEGORY}
          control={control}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors[UserFormKey.CATEGORY] ? "error" : ""}
              help={errors[UserFormKey.CATEGORY] ? errors[UserFormKey.CATEGORY]?.message : ""}
            >
              <Typography.Text strong>관심 종목</Typography.Text>
              <Typography style={{ fontSize: "12px", color: "#7D7D7D", paddingBottom: "10px" }}>
                최대 3개가 선택 가능합니다.
              </Typography>
              <Checkbox.Group
                {...field}
                style={{ background: "rgba(0,0,0,0.1)", minHeight: "100px", paddingLeft: "15px", borderRadius: "2px" }}
              >
                <Row justify="space-around" align="middle">
                  {exerciseList.map(option => (
                    <Col span={12} key={option.value}>
                      <Checkbox value={option.value}>{option.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          )}
        />
      </Space>
      <Form.Item>
        <Button
          disabled={
            !watchedGoals.length ||
            !watchedCategory.length ||
            Boolean(errors[UserFormKey.GOALS]) ||
            Boolean(errors[UserFormKey.CATEGORY])
          }
          style={{ paddingTop: "auto", width: "100%" }}
          type="primary"
          size="large"
          htmlType="submit"
        >
          회원 가입 완료
        </Button>
      </Form.Item>
    </>
  );
};

const SignMember = () => {
  const comments: string[] = [
    "간단한 기본 정보를 입력해주세요 :)",
    "상세 정보를 입력해주세요 :)",
    "원하시는 운동 정보를 입력해 주세요 :)",
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const schema = signUpFormSchema();

  const formMethods = useForm<IMemberFormData>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      [UserFormKey.NICKNAME]: "",
      [UserFormKey.CELLPHONE]: "",
      [UserFormKey.SEX]: "male",
      [UserFormKey.AGE]: "",
      [UserFormKey.CITY]: "",
      [UserFormKey.DISTRICT]: "",
      [UserFormKey.GOALS]: [],
      [UserFormKey.CATEGORY]: [],
    },
    resolver: yupResolver(schema),
  });

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 next={nextStep} />;
      case 2:
        return <Step2 prev={prevStep} next={nextStep} />;

      case 3:
        return <Step3 prev={prevStep} />;
      default:
        return <Step1 {...formMethods} next={nextStep} />;
    }
  };
  const handleSignUpClick = () => {
    // 관련 handle 동작
  };

  return (
    <>
      <Flex vertical style={{ height: "100%", flex: "auto" }}>
        <Typography.Title level={2}>
          <span>가장 쉬운</span>
          <br></br>
          <span style={{ color: "#1677FF" }}>트레이닝</span> 시작해볼까요?
        </Typography.Title>
        <Typography.Text strong style={{ color: "#1677FF", fontSize: "30px" }}>
          STEP {currentStep}
        </Typography.Text>
        <Typography.Text style={{ fontSize: "12px", color: "#7D7D7D" }}>{comments[currentStep]}</Typography.Text>
        <Flex vertical style={{ height: "100%" }}>
          <FormProvider {...formMethods}>
            <Form style={{ width: "100%" }} onFinish={formMethods.handleSubmit(handleSignUpClick)}>
              {renderStep()}
            </Form>
          </FormProvider>
        </Flex>
      </Flex>
    </>
  );
};

export default SignMember;
