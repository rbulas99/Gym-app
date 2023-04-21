import axios from 'axios';
import { API_URL } from '../../env';

export const deleteExercise = async (exerciseId: number | undefined) => {
  const response = await axios({
    method: 'delete',
    url: `${API_URL}/workout/exercise/${exerciseId}`
});
return response
}
 
