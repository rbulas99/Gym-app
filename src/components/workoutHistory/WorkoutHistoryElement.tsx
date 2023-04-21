import { useState } from 'react';
import { useGetWorkoutDetails } from '../../api/workout/getWorkoutDetails';
import { TLastWorkout } from '../../api/workout/getWorkouts';

import { Button, Card, Collapse, Group } from '@mantine/core';
import WorkoutExercise from './WorkoutExercise';

const WorkoutHistoryElement: React.FC<{ workout: TLastWorkout; }> = ({ workout }) => {
  const [opened, setOpened] = useState(false);
  const workoutExercises = useGetWorkoutDetails(workout.workoutId);

  return (
    <Card shadow='lg' radius='md' m='xs' my="lg" p='lg'>
      <Group position="apart">
        <div>
          <div className='text-lg'>{workout?.name}</div>
          <div className='text-xs'>{workout?.date.split('T')[0]}</div>
        </div>
        {!opened ? <Button variant='subtle' color='gray' onClick={() => setOpened(true)}>Szczegóły</Button> : <Button variant='subtle' color='gray' onClick={() => setOpened(false)}>Ukryj</Button>}
      </Group>
      <Collapse in={opened} >
        {workoutExercises.data?.map(exercise => (
          <WorkoutExercise key={exercise.exerciseId} exercise={exercise} />
        ))}
      </Collapse>
    </Card>
  );
};

export default WorkoutHistoryElement;