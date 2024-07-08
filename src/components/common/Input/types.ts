import type { InputProps } from "@mui/material";

export type InputType = {
  value: string | number;
  children?: React.ReactNode;
  /** custom으로 들어올 수 있는 아이들 */
} & InputProps;

export type ImageFile = {
  name: string; // 파일 이름
  size: number; // 파일 크기 (바이트 단위)
  type: string; // MIME 타입 (예: image/jpeg, image/png 등)
  url: string; // 이미지 파일의 URL (옵션)
  // lastModifiedDate?: Date;
};

export type fileInputType = {
  value: ImageFile | ImageFile[] | null;
  disabled?: boolean;
  multiple?: boolean;
  height?: number | string;
  width?: number | string;
  validation?: string[];
  onChangeValue: (values: ImageFile | ImageFile[] | null) => void;
};
