"use client";
import { Select as MuiSelect, SelectChangeEvent, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { IMultiSelect } from "./types";

const MultiSelect = (props: IMultiSelect) => {
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
        multiple
        value={currentSelectedData}
        onChange={handleChange}
        displayEmpty
        renderValue={() => {
          if (!currentSelectedData?.length) {
            return <em>{placeholder}</em>;
          }

          return currentSelectedData.join(",");
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

export default MultiSelect;

const StyledSelect = styled(MuiSelect)<Pick<IMultiSelect, "width" | "height">>`
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding-left: 10px;
  min-width: ${({ width }) => `${width}px` || "200px"};
  min-height: ${({ height }) => `${height}px` || "30px"};
  box-sizing: content-box;
`;
