import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button, Flex, Form, Input, Radio, Select, Typography } from "antd";

import { UserFormKey } from "@constants/common/formKey";
import { city, district } from "@constants/common/signup";

import { IMemberFormData, StepProps } from "./page";

const Step2 = ({ next }: StepProps) => {
  const { Option } = Select;

  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
    trigger,
  } = useFormContext<IMemberFormData>();

  const [districtOptions, setDistrictOptions] = useState<string[]>([]);

  const keysToCheckStep2 = [UserFormKey.AGE, UserFormKey.CITY, UserFormKey.DISTRICT];

  const checkAllErrors2 = keysToCheckStep2.some(key => errors[key]);

  const checkAllDirty2 = keysToCheckStep2.every(key => !!dirtyFields[key]);

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
                style={{ minWidth: "160px" }}
                ref={field.ref}
                placeholder="지역"
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
      <Form.Item>
        <Button
          style={{ paddingTop: "auto", width: "100%" }}
          type="primary"
          size="large"
          onClick={() => {
            if (!checkAllErrors2 && checkAllDirty2) {
              next();
              return;
            }
            void trigger(keysToCheckStep2);
          }}
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default Step2;
