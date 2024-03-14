import { Input as MuiInput, styled } from "@mui/material";

import type { InputProps } from "@mui/material";

export type InputType = {
  /** custom으로 들어올 수 있는 아이들 */
} & InputProps;

const Input = (props: InputType) => {
  const { disableUnderline = true, ...others } = props;

  return (
    <StyledInput disableUnderline={disableUnderline} {...others}></StyledInput>
  );
};

export default Input;

const StyledInput = styled(MuiInput)`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
