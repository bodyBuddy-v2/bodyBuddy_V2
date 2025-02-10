import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button, Flex, Form, Input, Radio, Select, Typography } from "antd";

import { TrainerFormKey } from "@constants/common/formKey";
import { city, district } from "@constants/common/signup";

import { StepProps } from "../type";
import { ITrainerFormData } from "./page";

const { Option } = Select;
const Step1 = ({ next }: StepProps) => {
  const {
    control,
    formState: { errors, dirtyFields },
    trigger,
  } = useFormContext<ITrainerFormData>();

  const [districtOptions, setDistrictOptions] = useState<string[]>([]);

  const keysToCheckStep1 = [
    TrainerFormKey.NAME,
    TrainerFormKey.CELLPHONE,
    TrainerFormKey.CITY,
    TrainerFormKey.DISTRICT,
  ];

  const checkAllErrors1 = keysToCheckStep1.some(key => errors[key]);

  const checkAllDirty1 = keysToCheckStep1.every(key => !!dirtyFields[key]);

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
      <Flex gap={"small"}>
        <Controller
          name={TrainerFormKey.CITY}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Select
                style={{ minWidth: "160px" }}
                placeholder="지역"
                value={field.value || undefined}
                onChange={(value: string) => {
                  field.onChange(value);
                  setDistrictOptions([...district[value]]);
                }}
                status={fieldState.error && "error"}
              >
                {city.map((option: string) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
        />
        <Controller
          name={TrainerFormKey.DISTRICT}
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error ? fieldState.error.message : ""}
            >
              <Select
                style={{ minWidth: "160px" }}
                placeholder="시/군"
                value={field.value || undefined}
                onChange={field.onChange}
                status={fieldState.error && "error"}
              >
                {districtOptions.map((option: string) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
        />
      </Flex>

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
          onClick={() => {
            if (!checkAllErrors1 && checkAllDirty1) {
              next();
              return;
            }
            void trigger(keysToCheckStep1);
          }}
          htmlType="submit"
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default Step1;
