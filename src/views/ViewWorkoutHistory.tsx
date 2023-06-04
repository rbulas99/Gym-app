import { useContext } from 'react';

import { UserContext } from '../context/userContext';
import { useGetWorkouts } from '../api/workout/getWorkouts';

import { LoadingOverlay } from '@mantine/core';

import WorkoutHistoryList from '../components/workoutHistory/WorkoutHistoryList';

const ViewWorkoutHistory = () => {
  const userContext = useContext(UserContext);
  const lastWorkouts = useGetWorkouts(userContext?.userId);
  return (
    <>
      <LoadingOverlay visible={lastWorkouts.isLoading} />
      <main className='w-full'>
        <div className='w-full text-center my-4 text-lg'>Historia treningów</div>
        <WorkoutHistoryList lastWorkouts={lastWorkouts.data} />
      </main></>

  );
};

export default ViewWorkoutHistory;