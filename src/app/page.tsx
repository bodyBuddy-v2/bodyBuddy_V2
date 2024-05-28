"use client";
import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";
import styled from "@emotion/styled";
import FileInput from "@/components/common/Input/FileInput";
import type { ImageFile } from "@/components/common/Input/FileInput";
import ImageList from "@/components/common/Input/ImageList";

const Home = () => {
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
    <div>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="subtitle1">subtitle1 - ex. 게시판 제목</Typography>
      <Typography variant="subtitle2">subtitle2 - ex. 상세정보, 수상경력 , 위치</Typography>
      <Typography variant="body1">body1 & div</Typography>
      <div>
        <Typography variant="body2">body2 & span</Typography>
      </div>
      <Typography variant="caption">caption - ex. 자격 및 수상 정보</Typography>
      <Button variant="outlined" color="primary">
        primary
      </Button>
      <Button variant="outlined" color="info">
        info
      </Button>

      <UploadFileContainer>
        <ImageList images={previewImg} onChangeValue={handlePreviewChange}></ImageList>
        <FileInput value={imageFiles} multiple onChangeValue={handleFileChange}></FileInput>
      </UploadFileContainer>
    </div>
  );
};
const UploadFileContainer = styled.div`
  padding: 16px;
  display: flex;
`;
export default Home;
