import { createClient } from "@supabase/supabase-js";

const serviceAPI = () => {
  const supabase = createClient("", "");

  return {
    getTrainerList: async () => {
      return await supabase.from("trainer").select("*");
    },
  };
};

export default serviceAPI;
