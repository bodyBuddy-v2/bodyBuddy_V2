import { PropsWithChildren } from "react";

export type StepProps = {
  next: () => void;
} & PropsWithChildren;
