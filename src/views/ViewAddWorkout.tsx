import { useContext } from 'react';

import { useGetWorkouts } from '../api/workout/getWorkouts';

import { LoadingOverlay } from '@mantine/core';
import AddWorkout from '../components/addWorkout/AddWorkout';
import CurrentWorkout from '../components/addWorkout/CurrentWorkout';
import { UserContext } from '../context/userContext';

const ViewAddWorkout = () => {
  const userContext = useContext(UserContext);
  const {data, refetch, isFetching} = useGetWorkouts(userContext?.userId);

  return (
    <>
    <LoadingOverlay visible={isFetching} />
      <main className='w-full'>
        <div className='w-full text-center my-4 text-lg'>Dodaj trening</div>
        <AddWorkout refetch={() => refetch()} />
        {data?.length ? <CurrentWorkout workout={data?.[0]} /> : null}

      </main>
    </>
  );
};

export default ViewAddWorkout;