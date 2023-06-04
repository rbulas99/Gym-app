import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postAddExerciseToWorkout } from '../../api/workout/postAddExerciseToWorkout';
import { TLastWorkout } from '../../api/workout/getWorkouts';

import { Card } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import WorkoutExercisesList from './WorkoutExercisesList';
import ExerciseSelectList from './ExerciseSelectList';
import KeyVal from '../common/KeyVal';
import { useGetWorkout } from '../../api/workout/getWorkout';

const CurrentWorkout: React.FC<{ lastWorkout: TLastWorkout | undefined; }> = ({ lastWorkout }) => {
  const [value, setValue] = useState<string | null>(null);
  const exercises = useGetWorkout(lastWorkout?.workoutId);

  const onSuccess = () => {
    exercises.refetch();
    setValue(null);
    showNotification({
      message: 'Dodano ćwiczenie',
      color: 'teal',
    });
  };
  const onError = () => {
    showNotification({
      message: 'Wystąpił błąd',
      color: 'red',
    });
  };

  const { mutate, isLoading } = useMutation(
    () => postAddExerciseToWorkout(lastWorkout?.workoutId, Number(value)), { onSuccess: onSuccess, onError: onError }
  );


  return (
    <div className='flex flex-col mx-auto w-full md:w-3/4'>
      <Card shadow='lg' radius='md' m='lg'>
        <div className='flex py-8'>
          <div className='w-2/3 p-4'>
            <div className='text-xl font-semibold'>{lastWorkout?.name}</div>
          </div>
          <div className='flex gap-3 w-1/3'>
            <KeyVal label='Data' value={lastWorkout ? lastWorkout?.date.split('T')[0] : '-'} />
          </div>
        </div>
        <WorkoutExercisesList exercises={exercises?.data} refetch={() => exercises.refetch()} />
        <ExerciseSelectList value={value} setValue={setValue} addExercise={mutate} isLoading={isLoading} />
      </Card>
    </div>
  );
};

export default CurrentWorkout;