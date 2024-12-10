type Category = "physicalStrength" | "diet" | "muscle" | "bodyAlignment";
type Field = "pt" | "yogaAndPilates" | "swimming" | "dance" | "golf" | "tennis";
type Gender = "male" | "female";
// user 선호 성별
type PreferGender = Gender | "none";

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

export type GetUserDetailOptionResponse = {
  city: string;
  district: string;
  prefer_gender: PreferGender;
  category: Category[];
  field: Field[];
};
