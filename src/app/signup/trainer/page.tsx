"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { TrainerFormSchema } from "@schemas/signup/TrainerFormSchema";
import { TrainerFormKey } from "@constants/common/formKey";
import { type SexType } from "@constants/common/signup";

import TrainerSignUpLayout from "./_layout";
// import { type ImageFile } from "@/components/common/Input/types";
import Step1 from "./_step1";
import Step2 from "./_step2";

import type { UploadFile } from "antd";

export interface ITrainerFormData {
  [TrainerFormKey.NAME]: string;
  [TrainerFormKey.CELLPHONE]: string;
  [TrainerFormKey.SEX]: SexType;
  [TrainerFormKey.PROFILE]: string;
  [TrainerFormKey.CITY]: string;
  [TrainerFormKey.DISTRICT]: string;
  [TrainerFormKey.FIELD]: string;
  [TrainerFormKey.COST]: string;
  [TrainerFormKey.RROFILEIMGS]: UploadFile[];
}

const SignTrainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const schema = TrainerFormSchema();

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const formMethods = useForm<ITrainerFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      [TrainerFormKey.NAME]: "",
      [TrainerFormKey.CELLPHONE]: "",
      [TrainerFormKey.SEX]: "male",
      [TrainerFormKey.PROFILE]: "",
      [TrainerFormKey.CATEGORY]: "",
      [TrainerFormKey.COST]: "",
      [TrainerFormKey.FIELD]: "",
      [TrainerFormKey.RROFILEIMGS]: [],
    },
    resolver: yupResolver(schema),
  });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 next={nextStep} />;
      case 2:
        return <Step2 />;
      default:
        return <Step1 {...formMethods} next={nextStep} />;
    }
  };

  const handleSignUpClick = () => {};

  return (
    <>
      <TrainerSignUpLayout currentStep={currentStep}>
        <FormProvider {...formMethods}>{renderStep()}</FormProvider>
      </TrainerSignUpLayout>
    </>
  );
};

export default SignTrainer;
