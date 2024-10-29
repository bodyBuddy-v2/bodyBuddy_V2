import { Controller, useFormContext } from "react-hook-form";
import { Button, Form, Input, Typography } from "antd";

import { UserFormKey } from "@constants/common/formKey";

import { IMemberFormData, StepProps } from "./page";

const Step1 = ({ next }: StepProps) => {
  const {
    control,
    formState: { errors, dirtyFields },
    trigger,
  } = useFormContext<IMemberFormData>();

  const checkErrorsStep1 = !!errors[UserFormKey.NICKNAME] || !!errors[UserFormKey.CELLPHONE];
  const checkDirtyStep1 = !!dirtyFields[UserFormKey.NICKNAME] && !!dirtyFields[UserFormKey.CELLPHONE];
  const fieldsToTrigger = [UserFormKey.NICKNAME, UserFormKey.CELLPHONE];

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
          style={{ width: "100%" }}
          type="primary"
          size="large"
          onClick={async () => {
            if (checkDirtyStep1 && !checkErrorsStep1) {
              next();
              return;
            }

            await triggerDirtyFields(
              dirtyFields as Partial<Record<(typeof fieldsToTrigger)[number], boolean>>,
              trigger,
              fieldsToTrigger,
            );
          }}
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default Step1;
