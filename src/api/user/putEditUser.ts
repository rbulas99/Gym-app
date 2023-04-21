import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { API_URL } from '../../env';

export const putEditUser = async (userId: number | undefined | null, data? : FieldValues) => {
  const response = await axios({
    method: 'put',
    url: `${API_URL}/user/${userId}`,
    data: data
});
return response
}
 
