import { useState } from 'react';
import { useGetExerciseSeries } from '../../api/workout/getExerciseSeries';
import { deleteSerieFromExercise } from '../../api/workout/deleteSerieFromExercise';
import { TWorkoutExercise } from '../../api/workout/getWorkoutDetails';
import { deleteExercise } from '../../api/workout/deleteExercise';

import { Button, Collapse, createStyles } from '@mantine/core';
import AddSerieToExerciseModal from './AddSerieToExerciseModal';
import DeleteButton from '../common/DeleteButton';

const useStyles = createStyles(() => ({
  container: {
    borderTop: '1px solid grey',
    marginTop: '1em',
    padding: '1em',
    width: '100%',
    justifyContent: 'space-between',
  },
  serie: {
    width: '100%',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const WorkoutExercisesListItem: React.FC<{ exercise: TWorkoutExercise; refetch: () => void; }> = ({ exercise, refetch }) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const exerciseSeries = useGetExerciseSeries(exercise.exerciseId);

  return (
    <div>
      <div className={classes.container}>
        <div className='w-full flex justify-between'>
          {exercise.name}
          <DeleteButton onClick={() => deleteExercise(exercise.exerciseId).then(() => refetch())} disabled={!!exerciseSeries.data?.length} />
        </div>
        <div className='w-full flex justify-between my-4 lg:justify-end'>
          <Button variant='filled' onClick={() => setIsModalOpened(true)}>Dodaj serie</Button>
          {!opened ? <Button variant='subtle' onClick={() => setOpened(true)}>Szczegóły</Button> : <Button variant='subtle' onClick={() => setOpened(false)}>Ukryj</Button>}
        </div>
      </div>
      <Collapse in={opened} >
        {exerciseSeries.data?.map((serie, index) => (
          <div className={classes.serie} key={serie.serieId}>
            <p>Seria {index + 1}</p>
            <div className='flex'>
              <p className='py-2'>{serie.reps} x {serie.weight}kg</p>
              <DeleteButton disabled={false} onClick={() => deleteSerieFromExercise(serie.serieId).then(() => exerciseSeries.refetch())} />
            </div>
          </div>
        ))}
        <AddSerieToExerciseModal opened={isModalOpened} setOpened={setIsModalOpened} exerciseId={exercise.exerciseId} refetch={() => exerciseSeries.refetch()} />
      </Collapse></div>

  );
};

export default WorkoutExercisesListItem;