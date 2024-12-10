type Category = "physicalStrength" | "diet" | "muscle" | "bodyAlignment";
type Gender = "male" | "female";

export type Trainer = {
  name: string;
};

export type GetUserDetailOptionRequest = {
  id: string;
};

export type GetTrainerListRequest = {
  category?: Category;
};

export type GetTrainerListResponse = Trainer[];
