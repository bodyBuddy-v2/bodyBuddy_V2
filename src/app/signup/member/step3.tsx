const Step3 = ({ prev }: StepProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IMemberFormData>();

  const checkErrorsStep3 = !!errors[UserFormKey.GOALS] || !!errors[UserFormKey.CATEGORY];

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
          disabled={checkErrorsStep3}
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

export default Step3;
