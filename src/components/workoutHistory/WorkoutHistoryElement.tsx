import { useState } from 'react';

import { Button, Card, Collapse, Group } from '@mantine/core';
import {  useGetWorkout } from '../../api/workout/getWorkout';
import WorkoutExercise from './WorkoutExercise';

const WorkoutHistoryElement: React.FC<{ workoutId: number | undefined; }> = ({ workoutId }) => {
  const [opened, setOpened] = useState(false);
  const {data} = useGetWorkout(workoutId);

  return (
    <Card shadow='lg' radius='md' m='xs' my="lg" p='lg'>
      <Group position="apart">
        <div>
          <div className='text-lg'>{data?.name}</div>
          <div className='text-xs'>{data?.date.split('T')[0]}</div>
        </div>
        {!opened ? <Button variant='subtle' color='gray' onClick={() => setOpened(true)}>Szczegóły</Button> : <Button variant='subtle' color='gray' onClick={() => setOpened(false)}>Ukryj</Button>}
      </Group>
      <Collapse in={opened} >
        {data?.exercises.map(exercises => (
          <WorkoutExercise key={exercises.exerciseId} exercise={exercises} />
        ))}
      </Collapse>
    </Card>
  );
};

export default WorkoutHistoryElement;