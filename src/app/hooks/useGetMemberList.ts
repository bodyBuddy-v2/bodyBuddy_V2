import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { QUERY_KEY } from "@constants/common/queryKey";

type GetMemberListType = {
  options?: UseQueryOptions<any, any, [], any>;
  usePolling?: boolean;
};

const useGetMemberList = ({ options, usePolling = false }: GetMemberListType) => {
  const fetcher = async () => {
    // return await ;
  };

  return useQuery({
    queryKey: [QUERY_KEY.GET_MEMBER_KEY],
    queryFn: fetcher,
    ...options,
  });
};

export default useGetMemberList;
