import { useState, ChangeEvent } from "react";
import { RemoveBtn, ImageFile as Picture } from "../../common/ImageList/ImageList";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { Button, Typography, Input, FileInput } from "@/components";
import type { ImageFile } from "@/components/common/Input/FileInput";

export type QualificationPost = {
  index: number;
  uploadUrl: ImageFile;
  content: string;
  width?: number;
  height?: number;
  onChangeValue: (
    state: "update" | "delete",
    index: number,
    newItem: { text?: string | null; imageUrl?: ImageFile | null },
  ) => void;
};

export const QualificationList = (props: QualificationPost) => {
  const { index, uploadUrl, content, height = 64, width = 92, onChangeValue } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content);
  const [imageUrl, setImageUrl] = useState<ImageFile | null>(uploadUrl);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setIsEditing(false);
    onChangeValue("update", index, { text, imageUrl });
  };
  const handleCancelClick = () => {
    setText(content);
    setIsEditing(false);
    setImageUrl(uploadUrl);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleFileChange = (values: ImageFile | ImageFile[] | null) => {
    if (!values) return;

    if (Array.isArray(values)) {
      setImageUrl(values[0]);
    } else {
      setImageUrl(values);
    }
  };

  const handleImgRemoveBtn = () => {
    onChangeValue("update", index, { text });
    setImageUrl(null);
  };
  const handleRemoveBtn = () => {
    onChangeValue("delete", index, {});
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} p={2}>
        {imageUrl ? (
          <Picture height={height} width={width}>
            <Image src={imageUrl.url} alt={`upload-${index}`} width={width} height={height}></Image>
            <RemoveBtn onClick={handleImgRemoveBtn}></RemoveBtn>
          </Picture>
        ) : (
          <FileInput value={imageUrl} height={height} width={width} onChangeValue={handleFileChange}></FileInput>
        )}
        {isEditing ? (
          <ListFormat>
            <Input multiline fullWidth sx={{ height: "inherits" }} value={text} onChange={handleChange} />
            <ListFormat sx={{ color: "text.primary" }}>
              <Button variant="text" size="small" color="inherit" onClick={handleSaveClick}>
                저장
              </Button>
              <Button variant="text" size="small" color="inherit" onClick={handleCancelClick}>
                취소
              </Button>
            </ListFormat>
          </ListFormat>
        ) : (
          <ListFormat>
            <Typography variant="body1" color="primary" textAlign={"center"}>
              {text}
            </Typography>
            <ListFormat sx={{ color: "text.primary" }}>
              <Button variant="text" size="small" color="inherit" onClick={handleEditClick}>
                수정
              </Button>
              <Button variant="text" size="small" color="inherit" onClick={handleRemoveBtn}>
                삭제
              </Button>
            </ListFormat>
          </ListFormat>
        )}
      </Box>
    </>
  );
};

const ListFormat = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
