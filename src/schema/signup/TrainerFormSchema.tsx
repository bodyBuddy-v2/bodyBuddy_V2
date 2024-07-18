import { TrainerFormKey } from "@/constant/common/formKey";
import { array, object, string, number, mixed } from "yup";

const TrainerFormSchema = () => {
  return object().shape({
    [TrainerFormKey.CATEGORY]: string().required("종목을 선택해 주세요."),
    [TrainerFormKey.FIELD]: string().required("분야를 선택해 주세요."),
    [TrainerFormKey.RROFILEIMG]: array()
      .of(
        object().shape({
          File: mixed().required(),
        }),
      )
      .required(),
    [TrainerFormKey.COMMENT]: string().required("").max(5, "최대 20자를 초과했습니다!"),
    [TrainerFormKey.TRAININGNAME]: string().required(""),
    [TrainerFormKey.TRAININGIMG]: array()
      .of(
        object().shape({
          name: string().required(),
          url: string().required(),
        }),
      )
      .required(),
    [TrainerFormKey.TRAININGPATH]: string(),
    [TrainerFormKey.COST]: number().required(),
    [TrainerFormKey.YEAR]: number().required(),
    [TrainerFormKey.MONTH]: number().test("required year info", "년도를 선택해 주세요.", (value, ctx) => {
      const { year } = ctx.parent;

      if (!value) return;
      console.log(Boolean(year) && !!value);
      return Boolean(year) && !!value;
    }),
    [TrainerFormKey.CERTIFICATIONS]: array().of(
      object().shape({
        name: string().required(),
        url: string().required(),
      }),
    ),
  });
};

export default TrainerFormSchema;
