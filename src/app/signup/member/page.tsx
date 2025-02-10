"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { signUpFormSchema } from "@schemas/signup/signUpFormSchema";
import { UserFormKey } from "@constants/common/formKey";

import MemberSignUpLayout from "./_layout";
import Step1 from "./_step1";
import Step2 from "./_step2";
import Step3 from "./_step3";

import type { SexType } from "@constants/common/signup";

export interface IMemberFormData {
  [UserFormKey.NICKNAME]: string;
  [UserFormKey.CELLPHONE]: string;
  [UserFormKey.SEX]: SexType;
  [UserFormKey.AGE]: string;
  [UserFormKey.CITY]: string;
  [UserFormKey.DISTRICT]: string;
  [UserFormKey.GOALS]: string[];
  [UserFormKey.CATEGORY]: string[];
}

export type UserFormKeyType = (typeof UserFormKey)[keyof typeof UserFormKey];

export interface StepProps {
  next: () => void;
  prev?: () => void;
}

const SignMemberPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const schema = signUpFormSchema();

  const formMethods = useForm<IMemberFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      [UserFormKey.NICKNAME]: "",
      [UserFormKey.CELLPHONE]: "",
      [UserFormKey.SEX]: "male",
      [UserFormKey.AGE]: "",
      [UserFormKey.CITY]: "",
      [UserFormKey.DISTRICT]: "",
      [UserFormKey.GOALS]: [],
      [UserFormKey.CATEGORY]: [],
    },
    resolver: yupResolver(schema),
  });

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 next={nextStep} />;
      case 2:
        return <Step2 prev={prevStep} next={nextStep} />;

      case 3:
        return <Step3 prev={prevStep} next={handleSignUpClick} />;
      default:
        return <Step1 {...formMethods} next={nextStep} />;
    }
  };
  const handleSignUpClick = () => {
    // 관련 handle 동작
  };

  return (
    <MemberSignUpLayout currentStep={currentStep}>
      <FormProvider {...formMethods}>{renderStep()}</FormProvider>
    </MemberSignUpLayout>
  );
};

export default SignMemberPage;
