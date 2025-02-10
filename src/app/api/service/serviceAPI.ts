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
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  return {
    // GET: trainer 리스트
    getTrainerList: async ({
      city,
      district,
      sex = "none",
      category = [],
      field = [],
    }: GetTrainerListRequest): Promise<GetTrainerListResponse> => {
      const res = await supabase
        .from("trainer")
        .select("*")
        .eq("city", city)
        .eq("district", district)
        .eq("sex", sex)
        .contains("category", category)
        .contains("field", field);

      // return res;
      return {
        data: [],
      };
    },
    // GET: user의 상세 option 설정
    getUserDetailOption: async ({ id }: GetUserDetailOptionRequest): Promise<GetUserDetailOptionResponse> => {
      const res = await supabase.from("user").select("").eq("id", id);

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
      const res = await supabase.from("user").update({
        city,
        district,
        sex,
        category,
        field,
      });

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
