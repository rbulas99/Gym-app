import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TWorkoutExercise = {
  exerciseId: number,
  name: string
}

export const getWorkoutDetails = async (workoutId: number | undefined) => {
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/workoutdetails/${workoutId}`,
  });
  return data;
};

export const useGetWorkoutDetails = (workoutId: number | undefined ) =>
{
  const workouts = useQuery({
    queryKey: ["getWorkoutDetails", workoutId],
    queryFn: () => getWorkoutDetails(workoutId),
  }) as UseQueryResult<TWorkoutExercise[]>;
  return workouts;
}
