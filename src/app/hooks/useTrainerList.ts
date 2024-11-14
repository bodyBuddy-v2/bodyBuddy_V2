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
    return await getTrainerList();
  };

  return useQuery({
    queryKey: [QUERY_KEY.GET_MEMBER_KEY],
    queryFn: fetcher,
    ...options,
  });
};

export default useGetTrainerList;
