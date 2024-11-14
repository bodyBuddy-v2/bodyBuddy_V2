export type Category = "physicalStrength" | "diet" | "muscle" | "bodyAlignment";
export type Sex = "male" | "female";
export type Field = "swimming" | "dance" | "golf" | "tennis" | "yogaAndPilates" | "pt";

export type Trainer = {
  id: number;
  name: string;
  cost: number;
  category: Category;
  desc: string;
  field: Field;
  sex: Sex;
};

export type GetTrainerListRequest = {
  category: Category;
};

export type GetTrainerListResponse = Trainer[];
