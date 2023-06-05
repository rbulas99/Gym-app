import axios from 'axios';
import { API_URL } from '../../env';
import { FieldValues } from 'react-hook-form';

export const postAddWorkout = async (userId: number | undefined | null, data? : FieldValues) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/workouts/${userId}`,
    data: data
});
return response
}
 
