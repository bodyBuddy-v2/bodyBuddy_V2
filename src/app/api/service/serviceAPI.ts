import axios from "axios";

import { GetTrainerListRequest, GetTrainerListResponse } from "./types";
const BASE_PATH = "";

const serviceAPI = () => {
  return {
    getTrainerList: async (queryStr?: GetTrainerListRequest): Promise<GetTrainerListResponse> => {
      // filter 들어가는 영역이라 queryString 만들어주는 util 필요함
      return await axios.get(`${BASE_PATH}/trainerList`);
    },
  };
};

export default serviceAPI;
