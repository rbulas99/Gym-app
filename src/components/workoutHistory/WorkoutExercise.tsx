import { useGetExerciseSeries } from '../../api/workout/getExerciseSeries';
import { TWorkoutExercise } from '../../api/workout/getWorkout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    borderTop: "1px solid grey",
    marginTop: '1em',
    padding: '1em 0'
  },
  serie: {
    width: '100%',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const WorkoutExercise: React.FC<{ exercise: TWorkoutExercise; }> = ({ exercise }) => {
  const exercisesSeries = useGetExerciseSeries(exercise.exerciseId);
  const { classes } = useStyles();


  return (
    <div className={classes.container}>
      <div>{exercise.exerciseType.name}</div>
      {exercisesSeries.data?.map((serie, index) => (
        <div className={classes.serie} key={serie.serieId}>
          <p>Seria {index + 1}</p>
          <p> {serie.reps} x {serie.weight}kg  </p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutExercise;