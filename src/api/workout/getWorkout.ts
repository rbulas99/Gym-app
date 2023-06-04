import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TWorkoutExercise = {
  exerciseId: number,
  exerciseType: {
    exerciseTypeId: string
    name: string
  }
}

export const getWorkout = async (workoutId: number | undefined) => {
  !workoutId && Promise.reject('workoutId is undefined')
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/workouts/${workoutId}`,
  });
  return data;
};

export const useGetWorkout = (workoutId: number | undefined ) =>
{
  const workouts = useQuery({
    queryKey: ["getWorkoutDetails", workoutId],
    queryFn: () => getWorkout(workoutId),
  }) as UseQueryResult<TWorkoutExercise[]>;
  return workouts;
}
