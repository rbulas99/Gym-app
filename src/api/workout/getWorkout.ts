import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TWorkout = {
  workoutId: number,
  userId: number,
  date: string,
  name: string,
  exercises: TExercise[],
  numberOfExercises: number

}

export type TExercise = {
  exerciseId: number,
  workoutId: number,
  exerciseTypeId: number,
  series: TSerie[],
  exerciseType: {
    exerciseTypeId: number,
    name: string
  }
}
export type TSerie = {
  serieId: number,
  exerciseId: number,
  reps: number,
  weight: number
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
  }) as UseQueryResult<TWorkout>;
  return workouts;
}
