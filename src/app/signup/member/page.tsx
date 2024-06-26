"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, FormControl, FormLabel } from "@mui/material";
import { Select, Input, Typography, Button } from "@/components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormKey } from "@/constant/common/formKey";
import signUpFormSchema from "@/schema/signup/signUpFormSchema";

import districts from "@/constant/common/district";
import city from "@/constant/common/city";
interface IMemberFormData {
  [UserFormKey.NICKNAME]: string;
  [UserFormKey.CITY]: string;
  [UserFormKey.DISTRICT]: string;
}

const SignMember = () => {
  const [districtOptions, setDistrictOptions] = useState<string[]>([]);

  const schema = signUpFormSchema();

  const { register, handleSubmit, control, formState, watch, setValue } = useForm<IMemberFormData>({
    mode: "onChange",
    defaultValues: {
      [UserFormKey.NICKNAME]: "",
      [UserFormKey.CITY]: "",
      [UserFormKey.DISTRICT]: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSignUpClick = async (data: IMemberFormData) => {
    // 관련 handle 동작
  };

  return (
    <>
      <Box height="100%" display={"flex"} flexDirection={"column"} mt={4}>
        <Box display={"flex"} flexDirection={"column"} fontSize={30} fontWeight={700}>
          <Typography variant="h3">
            <Typography variant="body1" sx={{ fontSize: "44px", fontWeight: "bold" }}>
              가장 쉬운
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "44px", fontWeight: "bold" }}>
              트레이닝 시작해볼까요?
            </Typography>
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} mt={8}>
          <Typography variant="h4" color="primary">
            STEP 1
          </Typography>
          <Typography variant="subtitle1">{`간단한 기본 정보를 입력해주세요 :)`}</Typography>
        </Box>

        <form onSubmit={handleSubmit(data => handleSignUpClick(data))}>
          <Box mb="auto">
            <InputItem>
              <label htmlFor="nickname-input" style={{ color: "#464646" }}>
                닉네임
              </label>
              <Controller
                name={UserFormKey.NICKNAME}
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      {...field}
                      id="nickname-input"
                      placeholder="특수 문자 제외 5자 이내"
                      value={field.value}
                      onChange={field.onChange}
                      error={Boolean(fieldState.error)}
                    />
                    {fieldState.error?.message && <FormLabel error={true}>{fieldState.error.message}</FormLabel>}
                  </>
                )}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="city-select" style={{ color: "P#464646" }}>
                관심 지역
              </label>
              <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                <Controller
                  name={UserFormKey.CITY}
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <FormControl fullWidth>
                        <Select
                          ref={field.ref}
                          currentSelectedData={field.value}
                          items={city}
                          placeholder="지역"
                          height={38}
                          width={240}
                          onChangeValue={value => {
                            setDistrictOptions(districts[value] || []);
                            setValue("district", "");
                            field.onChange(value);
                          }}
                          error={Boolean(fieldState.error)}
                        />
                      </FormControl>
                    );
                  }}
                ></Controller>

                <Controller
                  name={UserFormKey.DISTRICT}
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <Select
                        ref={field.ref}
                        currentSelectedData={field.value}
                        items={districtOptions}
                        placeholder="시/군/구"
                        height={38}
                        width={240}
                        onChangeValue={value => field.onChange(value)}
                        error={Boolean(fieldState.error)}
                      />
                    );
                  }}
                ></Controller>
              </Box>
            </InputItem>
          </Box>
          <Button variant="contained" fullWidth sx={{ height: "77px" }} type="submit">
            회원가입
          </Button>
        </form>
      </Box>
    </>
  );
};

export const InputItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "18px",
});
export default SignMember;
