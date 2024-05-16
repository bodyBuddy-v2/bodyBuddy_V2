"use client";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import type { SelectProps } from "@mui/material";

interface ISelect extends SelectProps {
  items: string[];
  placeholder?: string;
  currentSelectedData?: string;
  width?: number;
  height?: number;
  onChangeValue: (value: string) => void;
}

const Select = (props: ISelect) => {
  const { items, placeholder = "None", height, width, currentSelectedData, onChangeValue, ...others } = props;

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newValue: string = event.target.value as string;
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
        {items?.map((item: string, idx: number) => (
          <MenuItem value={item} key={`${item}-${idx}`}>
            {item}
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default Select;

const StyledSelect = styled(MuiSelect)<Pick<ISelect, "width" | "height">>`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  min-width: ${({ width }) => `${width}px` || "200px"};
  min-height: ${({ height }) => `${height}px` || "30px"};
  box-sizing: content-box;
`;
