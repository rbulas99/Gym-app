import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TLastWorkout = {
  workoutId: number
  userId: number
  date:string
  name: string
  numberOfExercises: number
};

export const getWorkouts = async (userId: number | undefined | null) => {
  !userId && Promise.reject("");
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/workout/user/${userId}`,
  });
  return data;
};

export const useGetWorkouts = (userId: number | undefined | null) =>
{
  const workouts = useQuery({
    queryKey: ["getWorkout", userId],
    queryFn: () => getWorkouts(userId),
  }) as UseQueryResult<TLastWorkout[]>;
  return workouts;
}
