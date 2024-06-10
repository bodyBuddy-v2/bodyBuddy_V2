import { ImageFile } from "@/components/common/Input/types";

type UploadFileType = {
  images: ImageFile[];
  width?: number;
  height?: number;
  onChangeValue?: (values: File[]) => void;
};

export type { ImageFile, UploadFileType };
