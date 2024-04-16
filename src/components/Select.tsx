"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Select as MuiSelect, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import type { SelectProps } from "@mui/material";

export type StyleSelectType = {
  height?: number;
  width?: number;
};

interface ISelect extends StyleSelectType, SelectProps {
  children?: React.ReactNode;
  items: Array<string>;
  placeholder?: string;
  label?: string;
  currentSelectedData?: string;
  onSetCurrentSelected: Dispatch<SetStateAction<string>>;
}

const Select = (props: ISelect) => {
  const {
    items,
    placeholder,
    height,
    width,
    displayEmpty,
    label,
    currentSelectedData,
    onSetCurrentSelected,
    ...others
  } = props;
  const [selected, setSelected] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setSelected(newValue);
    onSetCurrentSelected(newValue);
  };

  // useEffect(() => {
  //   if (currentSelectedData) {
  //     setSelected(currentSelectedData);
  //   }
  // }, [currentSelectedData]);

  useEffect(() => {
    setSelected(""); // items가 변경될 때 selected 값을 초기화
    onSetCurrentSelected(""); // 선택된 값으로 사용할 상태도 초기화
  }, [items]);

  return (
    <>
      <StyledSelect
        value={selected}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected: string) => {
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
  min-width: ${({ width }) => width || "200px"};
  min-height: ${({ height }) => height || "30px"};
  box-sizing: content-box;
`;
