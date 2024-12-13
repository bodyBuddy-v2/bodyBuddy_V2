import { createClient } from "@supabase/supabase-js";

import {
  GetTrainerListRequest,
  GetTrainerListResponse,
  GetUserDetailInfoRequest,
  GetUserDetailInfoResponse,
  GetUserDetailOptionRequest,
  GetUserDetailOptionResponse,
  PostUserDetailOptionRequest,
} from "./types";

const serviceAPI = () => {
  const supabase = createClient("", "");

  return {
    // GET: trainer 리스트
    getTrainerList: async ({
      city,
      district,
      sex = "none",
      category,
      field,
    }: GetTrainerListRequest): Promise<GetTrainerListResponse> => {
      const res = await supabase.from("trainer").select("*");
      // TODO: @minji type수정
      return {
        data: [],
      };
    },
    getUserInfo: async ({}) => {},
    // GET: user의 상세 option 설정
    getUserDetailOption: async ({ id }: GetUserDetailOptionRequest): Promise<GetUserDetailOptionResponse> => {
      const res = await supabase.from("user").select("*");

      return {
        city: "",
        district: "",
        prefer_gender: "none",
        category: [],
        field: [],
      };
    },
    // Post: user의 상세 option 설정 모달 수정
    postUserDetailOption: async ({
      city,
      district,
      sex = "none",
      category,
      field,
    }: PostUserDetailOptionRequest): Promise<any> => {
      const res = await supabase.from("user").select("*");

      return null;
    },
    // GET: User profile 조회
    getUserDetailInfo: async ({ id }: GetUserDetailInfoRequest): Promise<GetUserDetailInfoResponse> => {
      const res = await supabase.from("user").select("*");

      return {
        data: [],
      };
    },
  };
};

export default serviceAPI;
