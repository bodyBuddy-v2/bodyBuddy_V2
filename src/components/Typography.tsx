import { Typography as MuiTypography, styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";
///디자인 프롭을 어케 맞춰야할까...???

export type TypographyType = {
  /** custom으로 들어올 수 있는 아이들 */
} & TypographyProps;

const Typography = (props: TypographyProps) => {
  const { children, ...others } = props;

  return <StyledTypography {...others}>{children}</StyledTypography>;
};

export default Typography;

const StyledTypography = styled(MuiTypography)(({ variant }) => {
  return {
    ...(variant === "h2" && { fontWeight: 700, fontSize: "44px" }),
  };
});
