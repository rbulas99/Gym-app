import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../env";

export type TUser = {
  userId: number  ,
  username: string ,
  weight: number ,
  height: number 
}

export const getUser = async (userId: number | undefined | null) => {
  !userId && Promise.reject("");
  const { data } = await axios({
    method: "get",
    url: `${API_URL}/users/${userId}`,
  });
  return data;
};

export const useGetUser = (userId: number | undefined | null) => {
  const user = useQuery({
    queryKey: ["getuser", userId],
    queryFn: () => getUser(userId),
  }) as UseQueryResult<TUser>;
  return user;
};
