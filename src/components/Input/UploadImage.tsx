import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { camera, circleClose } from "@/public/assets/common";
import Image from "next/image";

export type UploadFileType = {
  onSetImgFiles: Dispatch<SetStateAction<File[]>>;
};

export const UploadImage = (props: UploadFileType) => {
  const { onSetImgFiles } = props;

  const [postImg, setPostImg] = useState<File[]>([]);
  const [alterFlag, setAlterFlag] = useState<boolean>(false);
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    let fileArr = Array.from(event.target?.files);

    if (!checkImageExtension(fileArr)) {
      setAlterFlag(true);
      return;
    }
    setPostImg(fileArr);
    // onSetImgFiles(fileArr);

    fileArr.forEach((file) => {
      let fileReader = new FileReader();

      fileReader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setPreviewImg((images) => [...images, `${e.target?.result}`]);
        }
      };

      fileReader.readAsDataURL(file);
    });
  };

  const onClickRemove = (index: number) => {
    setPostImg((files: File[]) => files.filter((_, idx) => idx !== index));
    setPreviewImg((images: string[]) =>
      images.filter((_, idx) => idx !== index)
    );
    // onSetImgFiles((files: File[]) => files.filter((_, idx) => idx !== index));
  };

  const checkImageExtension = (files: File[]) => {
    const imageExtensions = ["jpg", "jpeg", "png"];
    let flag = true;

    files.forEach((file: File) => {
      let type = file.type.split("/")[1];
      if (!imageExtensions.includes(type)) {
        flag = false;
      }
    });

    return flag ? true : false;
  };

  return (
    <>
      <UploadFileContainer>
        {previewImg &&
          previewImg.map((preview, idx) => (
            <div key={`upload-${idx}`} className={"upload-img"}>
              <Image
                src={preview}
                alt={`upload-${idx}`}
                width={92}
                height={64}
              />
              <button
                className="remove-img-btn"
                onClick={() => onClickRemove(idx)}
              />
            </div>
          ))}
        <label htmlFor="inputFile" onChange={onChangeInput}>
          <input id="inputFile" type="file" accept="image/*" multiple />
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
    background: url(${camera.src}) no-repeat;
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
    background: url(${circleClose.src}) no-repeat;
    background-position: center;
  }
`;

export default UploadImage;
