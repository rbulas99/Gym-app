import axios from 'axios';
import { API_URL } from '../../env';

export const postAddExerciseToWorkout = async (workoutId: number | undefined, exerciseTypeId : number | undefined) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/workout/${workoutId}/exercise`,
    data: {exerciseTypeId: exerciseTypeId}
});
return response
}
 