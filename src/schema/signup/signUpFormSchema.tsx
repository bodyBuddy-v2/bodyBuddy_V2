import { UserFormKey } from "@/constant/common/formKey";
import { object, string } from "yup";

const signUpFormSchema = () => {
  return object().shape({
    [UserFormKey.NICKNAME]: string()
      .required("닉네임을 입력해 주세요.")
      .max(5, "최소 2글자, 최대 5글자 입니다.")
      .min(2, "최소 2글자, 최대 5글자 입니다.")
      .matches(/^[a-zA-Z\ㄱ-ㅎ|가-힣]+$/, "특수 문자와 공백을 제거한 영문/한글만 입력이 가능합니다."),
    [UserFormKey.CITY]: string().required(),
    [UserFormKey.DISTRICT]: string().required(),
  });
};

export default signUpFormSchema;
