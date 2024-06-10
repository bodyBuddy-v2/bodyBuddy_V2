import type { SelectProps } from "@mui/material";

export interface IMultiSelect extends SelectProps {
  items: string[];
  placeholder?: string;
  currentSelectedData?: string[];
  height?: number;
  width?: number;
  onChangeValue: (values: string[]) => void;
}
