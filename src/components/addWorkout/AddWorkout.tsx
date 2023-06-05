import { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { postAddWorkout } from '../../api/workout/postAddWorkout';
import { UserContext } from '../../context/userContext';

import { Button, Card, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';


const schema = yup.object().shape({
  name: yup.string().required("Podaj nazwę treningu"),
}).required();

type AddWorkoutProps = { refetch: () => void; }

const AddWorkout: React.FC<AddWorkoutProps> = ({ refetch }) => {
  const userContext = useContext(UserContext);
  const onSuccess = () => {
    refetch();
    showNotification({
      message: 'Dodano trening',
      color: 'teal',
    });
  };
  const onError = () => { 
    showNotification({
      message: 'Wystąpił błąd',
      color: 'red',
    });
  };

  const { mutate } = useMutation(
    (data: FieldValues) => postAddWorkout(userContext?.userId, data), {onSuccess: onSuccess, onError: onError}
  );

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='w-full lg:w-3/4 lg:mx-auto'>
      <Card p="lg">
        <form onSubmit={handleSubmit(data => mutate(data))} className='flex justify-between'>
          <TextInput {...register("name")} placeholder='Nazwa Treningu' className='w-full' />
          <Button type="submit">Dodaj trening</Button>
        </form>
      </Card>
    </div >
  );
};

export default AddWorkout;