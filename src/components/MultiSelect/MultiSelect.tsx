"use client";
import { useState, useEffect } from "react";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import type { SelectProps } from "@mui/material";

export type StyleSelectType = {
  height?: number;
  width?: number;
};

interface IMultiSelect extends StyleSelectType, SelectProps {
  items: Array<string>;
  placeholder?: string;
  currentSelectedData?: string[];
  onChangeValue: (values: string[]) => void;
}

const MultiSelect = (props: IMultiSelect) => {
  const { items, placeholder, height, width, currentSelectedData, onChangeValue, ...others } = props;
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;

    const newValue: string[] = typeof value === "string" ? value.split(",") : value;
    setSelected(newValue);
    onChangeValue(newValue);
  };

  useEffect(() => {
    if (currentSelectedData?.length) {
      setSelected(currentSelectedData);
    }
  }, [currentSelectedData]);

  return (
    <>
      <StyledSelect
        multiple
        value={selected}
        onChange={handleChange}
        displayEmpty
        renderValue={() => {
          if (!selected.length) {
            return <em>{placeholder ? placeholder : "None"}</em>;
          }

          return selected.join(",");
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

export default MultiSelect;

const StyledSelect = styled(MuiSelect)<StyleSelectType>`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  min-width: ${({ width }) => `${width}px` || "200px"};
  min-height: ${({ height }) => `${height}px` || "30px"};
  box-sizing: content-box;
`;
