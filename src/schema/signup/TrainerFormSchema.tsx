import { TrainerFormKey } from "@/constant/common/formKey";
import { array, object, string } from "yup";
import type { UploadFile } from "antd";
import { exerciseList, fieldList, type SexType } from "@/constant/common/signup";
export const TrainerFormSchema = () => {
  return object().shape({
    [TrainerFormKey.NAME]: string()
      .required("실명 혹은 활동명을 입력해 주세요.")
      .max(5, "최소 2글자, 최대 5글자 입니다.")
      .min(2, "최소 2글자, 최대 5글자 입니다."),
    [TrainerFormKey.CELLPHONE]: string()
      .required("휴대폰 번호를 입력해주세요")
      .matches(/^010-\d{4}-\d{4}$/, "올바르지 않은 번호 형식입니다 "),
    [TrainerFormKey.SEX]: string().required("성별을 선택해주세요.").oneOf<SexType>(["male", "female"]),
    [TrainerFormKey.PROFILE]: string().required("소개를 입력해주세요").max(50, "50자 이내로 작성하세요."),
    [TrainerFormKey.CATEGORY]: string()
      .oneOf(
        exerciseList.map(({ value }) => value),
        "유효한 종목을 선택해주세요.",
      )
      .required("종목을 선택해 주세요."),
    [TrainerFormKey.FIELD]: string()
      .required("분야를 선택해 주세요.")
      .oneOf(
        fieldList.map(({ value }) => value),
        "유효한 분야를 선택해주세요.",
      ),
    [TrainerFormKey.RROFILEIMGS]: array<UploadFile>()
      .required("사진을 최소 1장 업로드 해주세요.")
      .min(1, "사진을 최소 1장 업로드 해주세요.")
      .max(3, "최대 업로드 할 수 있는 개수를 초과했습니다."),

    [TrainerFormKey.COST]: string()
      .required("비용을 입력해주세요.")
      .matches(/^[0-9,]+$/, "숫자만 입력 가능합니다."),
  });
};
