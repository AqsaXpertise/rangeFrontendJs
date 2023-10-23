import useSWR from "swr";
import httpClient from "./http-client";
export const useGetAllHomeData = () => {
  const { data: homeData, error, mutate } = useSWR(`/getHomeData`);
  return { homeData: homeData?.data, homeDataMutate: mutate };
};

export const saveContactFormApi = (data) => {
  return httpClient.post("/url", data);
};