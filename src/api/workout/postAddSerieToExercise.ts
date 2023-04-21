import axios from 'axios';
import { API_URL } from '../../env';

export const postAddSerieToExercise = async (exerciseId: number | undefined, data: any) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/workout/exercise/${exerciseId}/serie`,
    data: data
});
return response
}
 
