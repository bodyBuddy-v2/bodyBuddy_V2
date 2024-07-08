import { SelectProps } from "@mui/material";

export interface ISelect extends SelectProps {
  items: string[];
  currentSelectedData: string;
  width?: number;
  height?: number;
  onChangeValue: (value: string) => void;
}
