import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button, Flex, Form, Image, Input, Select, Typography, Upload } from "antd";

import { PlusOutlined } from "@ant-design/icons";

import { TrainerFormKey } from "@constants/common/formKey";
import { exerciseList, fieldList } from "@constants/common/signup";

import { ITrainerFormData } from "./page";

import type { GetProp, UploadFile, UploadProps } from "antd";
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

export default Step2;
