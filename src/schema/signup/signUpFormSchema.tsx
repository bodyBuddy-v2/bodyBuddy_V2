import { UserFormKey } from "@/constant/common/formKey";
import { object, string } from "yup";

const signUpFormSchema = () => {
  return object().shape({
    [UserFormKey.NICKNAME]: string()
      .required("닉네임을 입력해 주세요.")
      .max(5, "최소 2글자, 최대 5글자 입니다.")
      .min(2, "최소 2글자, 최대 5글자 입니다.")
      .matches(/^[a-zA-Z\ㄱ-ㅎ|가-힣]+$/, "특수 문자와 공백을 제거한 영문/한글만 입력이 가능합니다."),
    [UserFormKey.CITY]: string().required("관심 지역을 선택해 주세요."),
    [UserFormKey.DISTRICT]: string()
      .required("관심 지역을 선택해 주세요.")
      .test("required district info", "시/군/구를 선택해 주세요.", (value, ctx) => {
        const { city } = ctx.parent;

        console.log(Boolean(city) && !!value.length);
        // city가 존재하면, district도 존재해야 함
        return Boolean(city) && !!value.length;
      }),
  });
};

export default signUpFormSchema;
