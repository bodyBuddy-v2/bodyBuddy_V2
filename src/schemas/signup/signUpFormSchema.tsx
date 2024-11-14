import { array, object, string } from "yup";

import { UserFormKey } from "@constants/common/formKey";
import { city, SexType } from "@constants/common/signup";

export const signUpFormSchema = () => {
  return object().shape({
    [UserFormKey.NICKNAME]: string()
      .required("닉네임을 입력해 주세요.")
      .max(5, "최소 2글자, 최대 5글자 입니다.")
      .min(2, "최소 2글자, 최대 5글자 입니다.")
      .matches(/^[a-zA-Z\ㄱ-ㅎ|가-힣]+$/, "특수 문자와 공백을 제거한 영문/한글만 입력이 가능합니다."),

    [UserFormKey.CELLPHONE]: string()
      .required("핸드폰 번호를 입력해주세요.")
      .matches(/^\d{3}-\d{4}-\d{4}$/, "핸드폰 번호 형식에 맞게 입력해주세요."),

    [UserFormKey.SEX]: string().required("성별을 선택해주세요.").oneOf<SexType>(["male", "female"]),
    [UserFormKey.AGE]: string().required("나이를 입력해주세요.").matches(/^\d+$/, "숫자만 입력해주세요."),

    [UserFormKey.CITY]: string().required("지역을 선택해 주세요.").oneOf(city, "유효한 지역을 선택해주세요."),

    [UserFormKey.DISTRICT]: string()
      .required("시/군을 선택해주세요")
      .test("district-validation", "지역을 선택해 주세요.", (value, ctx) => {
        const { city } = ctx.parent;
        if (!city) return true;
        return !!value;
      }),
    [UserFormKey.GOALS]: array()
      .required()
      .of(string().required("운동 목적을 선택해주세요."))
      .min(1, "최소 한개의 목적을 선택해주세요.")
      .max(2, "최대 선택할 수 있는 개수를 초과했습니다."),

    [UserFormKey.CATEGORY]: array()
      .required()
      .of(string().required("관심 종목을 선택해주세요."))
      .min(1, "최소 한개의 종목을 선택해주세요.")
      .max(3, "최대 선택할 수 있는 개수를 초과했습니다."),
  });
};
