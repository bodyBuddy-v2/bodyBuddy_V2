import { array, object, string } from "yup";

import { OptionModalFormKey } from "@constants/common/formKey";
import { city, SexType } from "@constants/common/signup";
export const optionModalFormSchema = () => {
  return object().shape({
    [OptionModalFormKey.CITY]: string().oneOf(city, "유효한 지역을 선택해주세요."),

    [OptionModalFormKey.DISTRICT]: string().test("district-validation", "지역을 선택해 주세요.", (value, ctx) => {
      const { city } = ctx.parent;
      if (!city) return true;
      return !!value;
    }),
    [OptionModalFormKey.SEX]: string().oneOf<SexType>(["male", "female", "any"]),

    [OptionModalFormKey.GOALS]: array().max(2, "최대 선택할 수 있는 개수를 초과했습니다."),

    [OptionModalFormKey.CATEGORY]: array().max(3, "최대 선택할 수 있는 개수를 초과했습니다."),
  });
};
