type Category = "physicalStrength" | "diet" | "muscle" | "bodyAlignment";
type Field = "pt" | "yogaAndPilates" | "swimming" | "dance" | "golf" | "tennis";
type Gender = "male" | "female";
// user 선호 성별
type PreferGender = Gender | "none";

type Address = {
  city: string;
  district: string;
};

// 트레이너 정보
export type Trainer = {
  id: string;
  created_at: string;
  name: string;
  sex: Gender;
  desc: string;
  category: Category;
  field: Field;
  cost: number;
} & Address;

// 유저 정보
export type User = {
  id: string;
  created_at: string;
  nickname: string;
  sex: string;
  age: number;
  category: Category[]; // 관심 운동 목적 (아래 참고)
  field: Field[]; // 관심 종목
  prefer_gender: PreferGender;
} & Address;

export type GetUserDetailOptionRequest = {
  id: string;
};

export type GetUserDetailInfoRequest = GetUserDetailOptionRequest;

export type GetTrainerListRequest = {
  sex?: PreferGender;
  category?: Category[];
  field?: Field[];
} & Address;

// 트레이너 리스트 filtering = 상세 옵션 설정 modal 과 type 동일
export type PostUserDetailOptionRequest = GetTrainerListRequest;

export type GetTrainerListResponse = {
  data: Trainer[];
};
export type GetUserDetailOptionResponse = {
  prefer_gender: PreferGender;
  category: Category[];
  field: Field[];
} & Address;

export type GetUserDetailInfoResponse = {
  data: User[];
};
