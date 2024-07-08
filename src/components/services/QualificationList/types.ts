import { ImageFile } from "@/components/common/Input/types";

type QualificationPost = {
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

export type { QualificationPost, ImageFile };
