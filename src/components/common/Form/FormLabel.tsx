import { FormLabelProps, FormLabel as MuiFormLabel, styled } from "@mui/material";
import { forwardRef } from "react";

const FormLabel = forwardRef((props: FormLabelProps) => {
  const { children, ...others } = props;

  return <StyledFormLabel {...others}>{children}</StyledFormLabel>;
});

export default FormLabel;

const StyledFormLabel = styled(MuiFormLabel)(() => ({
  "&.Mui-error": {
    color: `#F90C0C`,
  },
}));
