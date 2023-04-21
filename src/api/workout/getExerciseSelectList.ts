import axios from "axios";
import { API_URL } from "../../env";

export type TExerciseSelectList = {
  exerciseTypeId: number,
  name: string
}


export const getExerciseSelectList = async () => {
  const response = await axios({
    method: "get",
    url: `${API_URL}/exercises/list`,
  });
  return response;
};
