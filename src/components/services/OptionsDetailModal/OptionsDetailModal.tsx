"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Col, Flex, Form, Modal, Radio, Row, Select, Space, Typography } from "antd";

import { yupResolver } from "@hookform/resolvers/yup";

import { optionModalFormSchema } from "@schemas/profile/optionModalSchema";
import { OptionModalFormKey } from "@constants/common/formKey";
import { exerciseList, fieldList, SexType } from "@constants/common/signup";
import { city, district } from "@constants/common/signup";

import type { ModalProps } from "antd";

type OptionModalProps = {
  onChangeValue: () => void;
} & ModalProps;
export interface IOptionModalFormData {
  [OptionModalFormKey.CITY]?: string;
  [OptionModalFormKey.DISTRICT]?: string;
  [OptionModalFormKey.SEX]?: SexType;
  [OptionModalFormKey.GOALS]?: string[];
  [OptionModalFormKey.CATEGORY]?: string[];
}

const schema = optionModalFormSchema();
export const OptionsDetailModal = (props: OptionModalProps) => {
  const { Option } = Select;

  const {
    control,
    formState: { errors, dirtyFields },
    trigger,
    handleSubmit,
  } = useForm<IOptionModalFormData>({
    resolver: yupResolver(schema),
  });

  const { open, onCancel, onChangeValue } = props;

  const [districtOptions, setDistrictOptions] = useState<string[]>([]);

  const onClickOkBtn = () => {
    onChangeValue();
  };
  return (
    <>
      <Modal
        title="상세 옵션 설정"
        centered
        open={open}
        width={"100%"}
        onCancel={onCancel}
        onOk={handleSubmit(onClickOkBtn)}
      >
        <hr />
        <Space direction="vertical" style={{ width: "100%" }}>
          <Typography>관심 지역</Typography>
          <Flex gap="large">
            <Controller
              name={OptionModalFormKey.CITY}
              control={control}
              render={({ field, fieldState }) => (
                <Form.Item
                  style={{ width: "100%" }}
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error ? fieldState.error.message : ""}
                >
                  <Select
                    size="small"
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
              name={OptionModalFormKey.DISTRICT}
              control={control}
              render={({ field, fieldState }) => (
                <Form.Item
                  style={{ width: "100%" }}
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error ? fieldState.error.message : ""}
                >
                  <Select
                    size="small"
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
            name={OptionModalFormKey.SEX}
            control={control}
            render={({ field }) => (
              <Form.Item>
                <Typography> 원하는 트레이너의 성별 </Typography>
                <Radio.Group
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  {...field}
                >
                  <Radio value="male">남성</Radio>
                  <Radio value="female">여성</Radio>
                  <Radio value="any">성별 무관</Radio>
                </Radio.Group>
              </Form.Item>
            )}
          />

          <Controller
            name={OptionModalFormKey.GOALS}
            control={control}
            render={({ field }) => (
              <Form.Item
                validateStatus={errors[OptionModalFormKey.GOALS] ? "error" : ""}
                help={errors[OptionModalFormKey.GOALS] ? errors[OptionModalFormKey.GOALS]?.message : ""}
              >
                <Typography.Text strong>운동 목적</Typography.Text>
                <Typography style={{ color: "#7D7D7D", paddingBottom: "10px" }}>최대 2개가 선택 가능합니다.</Typography>
                <Checkbox.Group
                  {...field}
                  style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.1)",
                    minHeight: "100px",
                    paddingLeft: "15px",
                    borderRadius: "2px",
                  }}
                >
                  <Row justify="space-between" align="middle">
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
            name={OptionModalFormKey.CATEGORY}
            control={control}
            render={({ field }) => (
              <Form.Item
                validateStatus={errors[OptionModalFormKey.CATEGORY] ? "error" : ""}
                help={errors[OptionModalFormKey.CATEGORY] ? errors[OptionModalFormKey.CATEGORY]?.message : ""}
              >
                <Typography.Text strong>관심 종목</Typography.Text>
                <Typography style={{ color: "#7D7D7D", paddingBottom: "10px" }}>최대 3개가 선택 가능합니다.</Typography>
                <Checkbox.Group
                  {...field}
                  style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.1)",
                    minHeight: "100px",
                    paddingLeft: "15px",
                    borderRadius: "2px",
                  }}
                >
                  <Row justify="space-between" align="middle">
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
      </Modal>
    </>
  );
};

export default OptionsDetailModal;
