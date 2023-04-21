import axios from 'axios';
import { FieldValues } from 'react-hook-form/dist/types';
import { API_URL } from '../../env';

export const postAddWorkout = async (userId: number | undefined | null, data? : FieldValues) => {
  const date = new Date();
  console.log(date.toLocaleDateString('en'))
  const response = await axios({
    method: 'post',
    url: `${API_URL}/workout/user/${userId}/add-workout`,
    data: data
});
return response
}
 
