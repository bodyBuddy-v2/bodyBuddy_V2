"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext, Controller, FormProvider } from "react-hook-form";
import { TrainerFormKey } from "@/constant/common/formKey";
import { Input, Typography, Select, Button, Radio, Space, Form, Flex, Image, Upload } from "antd";
import { TrainerFormSchema } from "@/schema/signup/TrainerFormSchema";
import { exerciseList, fieldList } from "@/constant/common/signup";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// import { type ImageFile } from "@/components/common/Input/types";

export interface ITrainerFormData {
  [TrainerFormKey.NAME]: string;
  [TrainerFormKey.CELLPHONE]: string;
  [TrainerFormKey.SEX]: string;
  [TrainerFormKey.PROFILE]: string;
  [TrainerFormKey.CATEGORY]: string;
  [TrainerFormKey.FIELD]: string;
  [TrainerFormKey.COST]: string;
  [TrainerFormKey.RROFILEIMGS]: UploadFile[];
}

interface StepProps {
  next: () => void;
  prev?: () => void;
}

const Step1 = ({ next }: StepProps) => {
  const {
    control,
    formState: { errors, dirtyFields },
    trigger,
  } = useFormContext<ITrainerFormData>();
  const checkErrorsStep1 =
    !!errors[TrainerFormKey.NAME] ||
    !!errors[TrainerFormKey.CELLPHONE] ||
    !!errors[TrainerFormKey.SEX] ||
    !!errors[TrainerFormKey.PROFILE];
  const checkDirtyStep1 = !!dirtyFields[TrainerFormKey.NAME] && !!dirtyFields[TrainerFormKey.CELLPHONE];
  return (
    <>
      <Controller
        name={TrainerFormKey.NAME}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={errors[TrainerFormKey.NAME] ? "error" : ""}
              help={errors[TrainerFormKey.NAME] ? errors[TrainerFormKey.NAME]?.message : ""}
            >
              <Typography>이름</Typography>
              <Input
                {...field}
                placeholder="실명 혹은 활동명 입력"
                id="nickname-input"
                value={field.value}
                onChange={field.onChange}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          </>
        )}
      />
      <Controller
        name={TrainerFormKey.CELLPHONE}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={errors[TrainerFormKey.CELLPHONE] ? "error" : ""}
              help={errors[TrainerFormKey.CELLPHONE] ? errors[TrainerFormKey.CELLPHONE]?.message : ""}
            >
              <Typography>핸드폰 번호</Typography>
              <Input
                {...field}
                placeholder="핸드폰 번호 입력"
                id="nickname-input"
                value={field.value}
                onChange={field.onChange}
                status={fieldState.error && "error"}
                color={fieldState.error && "error"}
              />
            </Form.Item>
          );
        }}
      ></Controller>
      <Controller
        name={TrainerFormKey.SEX}
        control={control}
        render={({ field }) => (
          <Form.Item style={{ width: "100%" }}>
            <Typography> 성별 </Typography>
            <Radio.Group {...field}>
              <Radio value="male">남성</Radio>
              <Radio value="female">여성</Radio>
            </Radio.Group>
          </Form.Item>
        )}
      />
      <Controller
        name={TrainerFormKey.PROFILE}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item
              validateStatus={errors[TrainerFormKey.PROFILE] ? "error" : ""}
              style={{ width: "100%" }}
              help={errors[TrainerFormKey.PROFILE] ? errors[TrainerFormKey.PROFILE]?.message : ""}
            >
              <Typography>트레이너 소개</Typography>
              <Input
                {...field}
                placeholder="50자 이내로 작성"
                id="nickname-input"
                value={field.value}
                onChange={field.onChange}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          );
        }}
      ></Controller>
      <Form.Item>
        <Button
          style={{ paddingTop: "auto", width: "100%" }}
          type="primary"
          size="large"
          onClick={async () => {
            if (checkDirtyStep1 && !checkErrorsStep1) {
              next();
              return;
            }
            if (dirtyFields[TrainerFormKey.NAME]) {
              await trigger(TrainerFormKey.NAME);
            }
            if (dirtyFields[TrainerFormKey.CELLPHONE]) {
              await trigger(TrainerFormKey.CELLPHONE);
            }
          }}
          htmlType="submit"
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

const Step2 = () => {
  const {
    control,
    formState: { errors, dirtyFields },
  } = useFormContext<ITrainerFormData>();

  const checkErrorsStep2 =
    !!errors[TrainerFormKey.CATEGORY] ||
    !!errors[TrainerFormKey.FIELD] ||
    !!errors[TrainerFormKey.RROFILEIMGS] ||
    !!errors[TrainerFormKey.COST];
  const checkDirtyStep2 =
    !!dirtyFields[TrainerFormKey.CATEGORY] &&
    !!dirtyFields[TrainerFormKey.FIELD] &&
    !!dirtyFields[TrainerFormKey.RROFILEIMGS] &&
    !!dirtyFields[TrainerFormKey.COST];

  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const formatNumber = (value: string) => {
    const numberValue = value.replace(/\D/g, ""); // 숫자만 남기기
    return new Intl.NumberFormat().format(Number(numberValue)); // 천 단위로 쉼표 추가
  };

  return (
    <>
      <Typography>종목 및 분야</Typography>
      <Flex gap="large">
        <Controller
          name={TrainerFormKey.CATEGORY}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={errors[TrainerFormKey.CATEGORY] ? "error" : ""}
              help={errors[TrainerFormKey.CATEGORY] ? errors[TrainerFormKey.CATEGORY]?.message : ""}
            >
              <Select
                options={exerciseList}
                value={field.value || undefined}
                style={{ minWidth: "160px" }}
                placeholder="종목"
                onChange={field.onChange}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          )}
        />
        <Controller
          name={TrainerFormKey.FIELD}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={errors[TrainerFormKey.FIELD] ? "error" : ""}
              help={errors[TrainerFormKey.FIELD] ? errors[TrainerFormKey.FIELD]?.message : ""}
            >
              <Select
                options={fieldList}
                value={field.value || undefined}
                placeholder="분야"
                style={{ minWidth: "160px" }}
                onChange={field.onChange}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          )}
        />
      </Flex>
      <Controller
        name={TrainerFormKey.RROFILEIMGS}
        control={control}
        render={({ field }) => {
          return (
            <Form.Item
              validateStatus={errors[TrainerFormKey.RROFILEIMGS] ? "error" : ""}
              help={errors[TrainerFormKey.RROFILEIMGS] ? errors[TrainerFormKey.RROFILEIMGS]?.message : ""}
            >
              <Typography>1회 가격</Typography>
              <Typography.Text style={{ fontSize: "12px", color: "#7D7D7D" }}>
                트레이너님을 대표할 수 있는 사진을 업로드 해주세요 (최소 1장)
              </Typography.Text>

              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                onPreview={handlePreview}
                onChange={({ fileList }) => {
                  field.onChange(fileList);
                }}
                fileList={field.value} // 업로드된 파일 리스트를 react-hook-form의 값으로 관리
              >
                <Button style={{ border: 0, background: "none", display: "flex", flexDirection: "column" }}>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </Button>
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{ display: "none" }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: visible => setPreviewOpen(visible),
                    afterOpenChange: visible => !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </Form.Item>
          );
        }}
      />
      <Controller
        name={TrainerFormKey.COST}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item
              validateStatus={errors[TrainerFormKey.COST] ? "error" : ""}
              help={errors[TrainerFormKey.COST] ? errors[TrainerFormKey.COST]?.message : ""}
            >
              <Typography>1회 가격</Typography>
              <Input
                {...field}
                placeholder="숫자만 입력 가능"
                id="nickname-input"
                value={formatNumber(field.value)}
                onChange={e => field.onChange(e.target.value)}
                status={fieldState.error && "error"}
              />
            </Form.Item>
          );
        }}
      ></Controller>
      <Flex>
        <Form.Item style={{ width: "100%" }}>
          <Button
            type="primary"
            style={{ paddingTop: "auto", width: "100%" }}
            size="large"
            onClick={() => {
              if (!checkDirtyStep2 || checkErrorsStep2) return;
            }}
          >
            회원가입 완료
          </Button>
        </Form.Item>
      </Flex>
    </>
  );
};

const SignTrainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const schema = TrainerFormSchema();
  const comments: string[] = ["간단한 기본 정보를 입력해주세요 :)", "상세 정보를 입력해주세요 :)"];

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const formMethods = useForm<ITrainerFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      [TrainerFormKey.NAME]: "",
      [TrainerFormKey.CELLPHONE]: "",
      [TrainerFormKey.SEX]: "male",
      [TrainerFormKey.PROFILE]: "",
      [TrainerFormKey.CATEGORY]: "",
      [TrainerFormKey.COST]: "",
      [TrainerFormKey.FIELD]: "",
      [TrainerFormKey.RROFILEIMGS]: [],
    },
    resolver: yupResolver(schema),
  });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 next={nextStep} />;
      case 2:
        return <Step2 />;
      default:
        return <Step1 {...formMethods} next={nextStep} />;
    }
  };

  const handleSignUpClick = () => {};

  return (
    <>
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
        <FormProvider {...formMethods}>
          <Form style={{ width: "100%" }} onFinish={formMethods.handleSubmit(handleSignUpClick)}>
            {renderStep()}
          </Form>
        </FormProvider>
      </Space>
    </>
  );
};

export default SignTrainer;
