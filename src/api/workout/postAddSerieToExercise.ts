import axios from 'axios';
import { API_URL } from '../../env';
import { FieldValues } from 'react-hook-form';

export const postAddSerieToExercise = async (exerciseId: number | undefined, data: FieldValues ) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/workouts/exercises/${exerciseId}`,
    data: data
});
return response
}
 
