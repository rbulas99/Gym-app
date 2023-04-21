import axios from 'axios';
import { API_URL } from '../../env';

export const deleteSerieFromExercise = async (serieId: number | undefined) => {
  const response = await axios({
    method: 'delete',
    url: `${API_URL}/workout/exercise/serie/${serieId}`
});
return response
}
 
