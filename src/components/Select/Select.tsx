"use client";

import { Select as MuiSelect, styled } from "@mui/material";
import { MenuItem } from "@mui/material";
import type { SelectChangeEvent, SelectProps } from "@mui/material";

interface ISelect extends SelectProps {
  items: string[];
  placeholder?: string;
  currentSelectedData: string;
  width?: number;
  height?: number;
  onChangeValue: (value: string[]) => void;
}

const Select = (props: ISelect) => {
  const { items, placeholder = "None", height, width, currentSelectedData, onChangeValue, ...others } = props;

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;

    const newValue: string[] = typeof value === "string" ? value.split(",") : (value as string[]);

    onChangeValue(newValue);
  };

  return (
    <>
      <StyledSelect
        value={currentSelectedData}
        onChange={handleChange}
        displayEmpty
        renderValue={() => {
          if (!currentSelectedData) {
            return <em>{placeholder}</em>;
          }

          return currentSelectedData;
        }}
        width={width}
        height={height}
        {...others}
      >
        {items.map((item: string, idx: number) => (
          <MenuItem value={item} key={`${item}-${idx}`}>
            {item}
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default Select;

const StyledSelect = styled(MuiSelect)<Pick<ISelect, "width" | "height">>(({ width, height }) => ({
  border: "1px solid #cdcdcd",
  borderRadius: "10px",
  paddingLeft: "10px",
  minWidth: width ? `${width}px` : "200px",
  minHeight: height ? `${height}px` : "30px",
  boxSizing: "content-box",
}));
