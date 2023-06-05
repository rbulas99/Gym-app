import { createStyles } from '@mantine/core';
import { TExercise } from '../../api/workout/getWorkout';

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

const WorkoutExercise: React.FC<{ exercise: TExercise; }> = ({ exercise }) => {
  const { classes } = useStyles();


  return (
    <div className={classes.container}>
      <div>{exercise.exerciseType.name}</div>
      {exercise.series.map((serie, index) => (
        <div className={classes.serie} key={serie.serieId}>
          <p>Seria {index + 1}</p>
          <p> {serie.reps} x {serie.weight}kg  </p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutExercise;