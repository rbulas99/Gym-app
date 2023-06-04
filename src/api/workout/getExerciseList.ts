import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";
import { API_URL } from "../../env";

export type TExerciseSelectList = {
  exerciseTypeId: number,
  name: string
}



export const getExerciseList = async () => {
  const {data} = await axios({
    method: "get",
    url: `${API_URL}/workouts/exercises/list`,
  });
  return data;
};


export const useGetExerciseList =  () => {
  const exerciseSeries = useQuery({
    queryKey: ["getExerciseList"],
    queryFn: getExerciseList,
  }) as UseQueryResult<TExerciseSelectList[]>;
  return exerciseSeries;
};
