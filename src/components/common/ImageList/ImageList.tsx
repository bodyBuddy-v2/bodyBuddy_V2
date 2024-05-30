"use client";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export type ImageListType = {
  images: string[];
  width?: number;
  height?: number;
  onChangeValue: (index: number) => void;
};

export const ImageList = (props: ImageListType) => {
  const { images, height = 64, width = 92, onChangeValue } = props;

  const onClickRemove = (index: number) => {
    onChangeValue(index);
  };

  return (
    <>
      {images.map((image, idx: number) => (
        <ImageFile key={`upload-${idx}`} height={height} width={width}>
          <Image src={image} alt={`upload-${idx}`} width={width} height={height} />
          <RemoveBtn onClick={() => onClickRemove(idx)} />
        </ImageFile>
      ))}
    </>
  );
};

const ImageFile = styled("div")<Pick<ImageListType, "width" | "height">>(props => {
  const { width, height } = props;
  return {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: "#b9b9b9",
    marginRight: "10px",
    position: "relative",
  };
});

const RemoveBtn = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "-10px",
  right: "-3px",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  borderColor: "transparent",
  background: 'url("/assets/common/circleClose.svg") no-repeat',
  backgroundPosition: "center",
  backgroundSize: "cover",
  cursor: "pointer",
}));

export default ImageList;
