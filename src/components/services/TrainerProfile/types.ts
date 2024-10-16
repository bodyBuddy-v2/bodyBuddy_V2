import type { UploadFile } from "antd";

export type TrainerProfileType = {
  images: UploadFile[];
  name: string;
  profile: string;
  category: string;
  cost: string;
};
