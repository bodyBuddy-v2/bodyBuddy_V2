"use client";
import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import Image from "next/image";

export type UploadFileType = {
  images: File[];
  onChangeValue: (values: File[]) => void;
};

export const UploadImage = (props: UploadFileType) => {
  const { images, onChangeValue } = props;

  const [alterFlag, setAlterFlag] = useState<boolean>(false);
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fileArr = Array.from(event.target?.files);

    if (!checkImageExtension(fileArr)) {
      setAlterFlag(true);
      return;
    }
    onChangeValue(fileArr);

    fileArr.forEach(file => {
      const fileReader = new FileReader();

      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setPreviewImg(images => [...images, `${result}`]);
        }
      };

      fileReader.readAsDataURL(file);
    });
  };

  const onClickRemove = (index: number) => {
    setPreviewImg((images: string[]) => images.filter((_, idx) => idx !== index));
    onChangeValue(images.filter((_, idx) => idx !== index));
  };

  const checkImageExtension = (files: File[]) => {
    const imageExtensions = ["jpg", "jpeg", "png"];
    let flag = true;

    files.forEach((file: File) => {
      const type = file.type.split("/")[1];
      if (!imageExtensions.includes(type)) {
        flag = false;
      }
    });

    return flag ? true : false;
  };

  return (
    <>
      <UploadFileContainer>
        {previewImg.map((preview, idx) => (
          <div key={`upload-${idx}`} className={"upload-img"}>
            <Image src={preview} alt={`upload-${idx}`} width={92} height={64} />
            <button className="remove-img-btn" onClick={() => onClickRemove(idx)} />
          </div>
        ))}
        <label htmlFor="inputFile">
          <input id="inputFile" type="file" accept="image/*" multiple onChange={onChangeInput} />
        </label>
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
      </UploadFileContainer>
    </>
  );
};

const UploadFileContainer = styled.div`
  padding: 16px;
  display: flex;

  label {
    display: inline-block;
    width: 92px;
    height: 64px;
    background: url("/assets/common/camera.svg") no-repeat;
    background-position: center;
    border: 1px solid #b9b9b9;
    cursor: pointer;
  }

  input {
    display: none;
  }

  .upload-img {
    background-color: #b9b9b9;
    width: 92px;
    height: 64px;
    margin-right: 10px;
    position: relative;
  }

  .remove-img-btn {
    position: absolute;
    top: -10px;
    right: -3px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-color: transparent;
    background: url("/assets/common/circleClose.svg") no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
`;

export default UploadImage;
