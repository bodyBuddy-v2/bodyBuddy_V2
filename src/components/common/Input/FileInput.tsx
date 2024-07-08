"use client";
import React, { useState, ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import { Alert } from "@mui/material";
import { fileInputType, ImageFile } from "./types";

export const FileInput = (props: fileInputType) => {
  const {
    value,
    multiple = false,
    disabled = false,
    height = "64px",
    width = "92px",
    validation,
    onChangeValue,
  } = props;
  const [alterFlag, setAlterFlag] = useState<boolean>(false);

  // const checkImageExtension = (validate: string[]) => {
  //   let flag = true;

  //   value.forEach((file: ImageFile) => {
  //     const type = file.type.split("/")[1];
  //     if (!validate.includes(type)) {
  //       flag = false;
  //     }
  //   });

  //   return flag ? true : false;
  // };
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    if (!files.length) return;

    if (!Array.isArray(value)) {
      // value가 배열이 아닌 경우 처리
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          const newFile: ImageFile = {
            name: file.name,
            size: file.size,
            type: file.type,
            url: result,
          };
          onChangeValue(newFile);
        }
      };

      reader.readAsDataURL(file);

      // if (validation && !checkImageExtension(file.type, validation)) {
      //   setAlertFlag(true);
      // }
    } else {
      // value가 배열인 경우 처리
      const fileArr: ImageFile[] = [];
      files.forEach((file: File) => {
        const reader = new FileReader();

        reader.onload = () => {
          const result = reader.result;
          if (typeof result === "string") {
            const newFile: ImageFile = {
              name: file.name,
              size: file.size,
              type: file.type,
              url: result,
            };
            fileArr.push(newFile);
          }

          if (fileArr.length === files.length) {
            onChangeValue(fileArr);
          }
        };

        reader.readAsDataURL(file);
      });

      // if (validation && !checkImageExtension(files[0].type, validation)) {
      //   setAlertFlag(true);
      // }
    }
  };
  return (
    <>
      <Label htmlFor="inputFile" height={height} width={width}>
        <input
          id="inputFile"
          disabled={disabled}
          type="file"
          accept="image/*"
          multiple={multiple}
          style={{ display: "none" }}
          onChange={onChangeInput}
        />
      </Label>
      {alterFlag && (
        <Alert
          severity="error"
          onClose={() => {
            setAlterFlag(false);
          }}
          sx={{ position: "absolute", right: "30%", bottom: "20%" }}
        >
          {`"jpg", "jpeg", "png" 형식의 이미지만 선택해주세요.`}
        </Alert>
      )}
    </>
  );
};

const Label = styled("label")<Pick<fileInputType, "width" | "height">>(({ width, height }) => ({
  width: typeof width === "number" ? `${width}px` : width,
  height: typeof height === "number" ? `${height}px` : height,
  display: "inline-block",
  background: 'url("/assets/common/camera.svg") no-repeat',
  backgroundPosition: "center",
  border: "1px solid #b9b9b9",
  cursor: "pointer",
}));

export default FileInput;
