import { TrainerFormKey } from "@/constant/common/formKey";
import { object, string } from "yup";
import { exerciseList, fieldList } from "@/constant/common/signup";

const TrainerFormSchema = () => {
  return object().shape({
    [TrainerFormKey.CATEGORY]: string()
      .oneOf(exerciseList, "유효한 종목을 선택해주세요.")
      .required("종목을 선택해 주세요."),
    [TrainerFormKey.FIELD]: string().oneOf(fieldList, "유효한 분야를 선택해주세요.").required("분야를 선택해 주세요."),
    [TrainerFormKey.COMMENT]: string().required("프로필 코멘트를 입력해주세요.").max(20, "최대 20자를 초과했습니다!"),
    [TrainerFormKey.COST]: string()
      .required("비용을 입력해주세요.")
      .matches(/^[0-9,]+$/, "숫자만 입력 가능합니다."),
    [TrainerFormKey.YEAR]: string().required("년도를 입력해주세요."),
    [TrainerFormKey.MONTH]: string().required("월을 입력해주세요."),
  });
};

export { TrainerFormSchema };
