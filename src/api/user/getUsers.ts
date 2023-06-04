import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../../env';
import { TUser } from './getUser';

export const getUsers = async () => {
  const {data} = await axios({
    method: 'get',
    url: `${API_URL}/users`,
});
return data
}
 
export const useGetUsers = () => {
  const users = useQuery({
    queryKey:["getUsers"],
    queryFn: getUsers
  }) as  UseQueryResult<TUser[]>;
  return users
}