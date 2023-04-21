import { TWorkoutExercise } from '../../api/workout/getWorkoutDetails';
import WorkoutExerciseListItem from './WorkoutExerciseListItem';

const WorkoutExercisesList:React.FC<{exercises: TWorkoutExercise[] | undefined; refetch: () => void}> = ({exercises, refetch}) => {
  return (
    <>{exercises?.map(exercise => (
      <WorkoutExerciseListItem key={exercise.exerciseId} exercise={exercise} refetch={refetch}  />))}</>
  )
}

export default WorkoutExercisesList