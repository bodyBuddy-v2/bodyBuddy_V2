export type Trainer = {
  name: string;
};

export type GetTrainerListRequest = {
  category: "physicalStrength" | "diet" | "muscle" | "bodyAlignment";
};

export type GetTrainerListResponse = Trainer[];
