import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TExerciseSerie = {
  serieId: number,
  exerciseId: number,
  reps: number,
  weight: number
}



export const getExerciseSeries = async (exerciseId: number | undefined) => {
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/workouts/${exerciseId}/series`,
  });
  return data;
};


export const useGetExerciseSeries =  (exerciseId: number | undefined) => {
  const exerciseSeries = useQuery({
    queryKey: ["getExerciseSeries", exerciseId],
    queryFn: () => getExerciseSeries(exerciseId),
  }) as UseQueryResult<TExerciseSerie[]>;
  return exerciseSeries;
};
