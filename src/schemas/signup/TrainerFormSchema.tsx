import { array, mixed, object, string } from "yup";

import { TrainerFormKey } from "@constants/common/formKey";
import { CategoryList, city, GoalsList, SexType } from "@constants/common/signup";

const categoryValues = Object.values(CategoryList);
const GoalsValues = Object.values(GoalsList);

import type { UploadFile } from "antd";
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
    [TrainerFormKey.PROFILE]: string().max(50, "50자 이내로 작성하세요."),
    [TrainerFormKey.CATEGORY]: mixed<CategoryList>().oneOf(categoryValues).required("유효한 종목을 선택해주세요."),
    [TrainerFormKey.FIELD]: mixed<GoalsList>().oneOf(GoalsValues).required("유효한 분야를 선택해주세요."),
    [TrainerFormKey.RROFILEIMGS]: array<UploadFile>()
      .required("사진을 최소 1장 업로드 해주세요.")
      .min(1, "사진을 최소 1장 업로드 해주세요.")
      .max(3, "최대 업로드 할 수 있는 개수를 초과했습니다."),

    [TrainerFormKey.COST]: string()
      .required("비용을 입력해주세요.")
      .matches(/^[0-9,]+$/, "숫자만 입력 가능합니다."),
    [TrainerFormKey.CITY]: string().required("지역을 선택해 주세요.").oneOf(city, "유효한 지역을 선택해주세요."),

    [TrainerFormKey.DISTRICT]: string()
      .required()
      .test("required district info", "지역을 선택해 주세요.", (value, ctx) => {
        const { city } = ctx.parent;
        if (!city) return true; // city가 없으면 district 체크 안 함
        return value && value.trim() !== "";
      }),
  });
};
