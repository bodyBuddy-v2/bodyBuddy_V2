import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import serviceAPI from "@app/api/service/serviceAPI";

import { QUERY_KEY } from "@constants/common/queryKey";

// n 초 마다 update 해주는 usePolling
type GetTrainerListType = {
  options?: UseQueryOptions<any, any, [], any>;
  usePolling?: boolean;
};

const useGetTrainerList = ({ options, usePolling = false }: GetTrainerListType) => {
  const { getTrainerList } = serviceAPI();

  const fetcher = async () => {
    const res = await getTrainerList({
      city: "수원시",
      district: "팔달구",
      sex: "male",
      category: ["muscle"],
      field: ["pt"],
    });

    return res;
  };

  return useQuery({
    queryKey: [QUERY_KEY.GET_MEMBER_KEY],
    queryFn: fetcher,
    ...options,
  });
};

export default useGetTrainerList;
