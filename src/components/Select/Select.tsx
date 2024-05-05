"use client";
import { useEffect, useState } from "react";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import type { SelectProps } from "@mui/material";

export type StyleSelectType = {
  height?: number;
  width?: number;
};

interface ISelect extends StyleSelectType, SelectProps {
  items: Array<string>;
  placeholder?: string;
  currentSelectedData?: string;
  onChangeValue?: (value: string) => void;
}

const Select = (props: ISelect) => {
  const { items, placeholder, height, width, currentSelectedData, onChangeValue, ...others } = props;
  const [selected, setSelected] = useState(currentSelectedData);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue: string = event.target.value;
    setSelected(newValue);
    onChangeValue(newValue);
  };

  useEffect(() => {
    setSelected(currentSelectedData);
  }, [currentSelectedData]);

  return (
    <>
      <StyledSelect
        value={selected}
        onChange={handleChange}
        displayEmpty
        renderValue={() => {
          if (!selected) {
            return <em>{placeholder ? placeholder : "None"}</em>;
          }

          return selected;
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

const StyledSelect = styled(MuiSelect)<StyleSelectType>`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  min-width: ${({ width }) => `${width}px` || "200px"};
  min-height: ${({ height }) => `${height}px` || "30px"};
  box-sizing: content-box;
`;
