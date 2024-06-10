"use client";
import React, { useState } from "react";
// import type { ImageFile } from "../../common/Input/FileInput";
import { FileInput, ImageList } from "../../common";
import type { UploadFileType, ImageFile } from "./types";

export const UploadImage = (props: UploadFileType) => {
  const { images, height, width, onChangeValue } = props;

  const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  const handleFileChange = (selectedFiles: ImageFile[] | null) => {
    if (!selectedFiles || selectedFiles.length <= 0) return;

    const previews: string[] = selectedFiles.map(({ url }) => `${url}`);

    setImageFiles(selectedFiles);
    setPreviewImg(previews);
  };

  const handlePreviewChange = (index: number) => {
    setPreviewImg((images: string[]) => images.filter((_, idx) => idx !== index));
    setImageFiles((images: ImageFile[]) => images.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <div style={{ padding: "16px", display: "flex" }}>
        <ImageList images={previewImg} height={height} width={width} onChangeValue={handlePreviewChange}></ImageList>
        <FileInput
          value={imageFiles}
          height={height}
          width={width}
          multiple
          onChangeValue={handleFileChange}
          validation={["jpg", "jpeg", "png"]}
        ></FileInput>
      </div>
    </>
  );
};

export default UploadImage;
