import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TWorkouts = {
  workoutId: number
  userId: number
  date:string
  name: string
};

export const getWorkouts = async (userId: number | undefined | null) => {
  !userId && Promise.reject("");
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/users/${userId}/workouts`,
  });
  return data;
};

export const useGetWorkouts = (userId: number | undefined | null) =>
{
  const workouts = useQuery({
    queryKey: ["getWorkout", userId],
    queryFn: () => getWorkouts(userId),
  }) as UseQueryResult<TWorkouts[]>;
  return workouts;
}
