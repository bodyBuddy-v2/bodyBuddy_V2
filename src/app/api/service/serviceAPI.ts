import { createClient } from "@supabase/supabase-js";

import { GetUserDetailOptionRequest } from "./types";

const serviceAPI = () => {
  const supabase = createClient("", "");

  return {
    getTrainerList: async () => {
      return await supabase.from("trainer").select("*");
    },
    // user가 설정한 상세 옵션 설정
    getUserDetailOption: async ({ id }: GetUserDetailOptionRequest) => {},
  };
};

export default serviceAPI;
