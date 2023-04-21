import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';
import { useGetUsers } from '../api/user/getUsers';

import { Button, Group, Select } from '@mantine/core';

const SelectUser = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string | null>(null);
  const userContext = useContext(UserContext);
  const users = useGetUsers();

  const signIn = () => {
    localStorage.setItem('userId', value ? value : '');
    if (userContext) {
      userContext.setUserId(Number(value));
    }
    navigate('/');
  };

  const usersSelectList = users.data?.map((user) => (
    { value: user.userId.toString(), label: user.username }
  ));
  console.log(usersSelectList);
  return (
    <div className='w-full my-4'>
      <div className='w-1/2 mx-auto'>
        <Select
          clearable
          placeholder="Wybierz użytkownika"
          data={usersSelectList ? usersSelectList : []}
          value={value}
          onChange={setValue}
          className='w-full'
        />
        <Group position="right">
          <Button disabled={!value} onClick={signIn} color='gray'>Kontynuuj</Button>
        </Group>
      </div>
    </div>
  );
};
export default SelectUser;