import { TLastWorkout } from '../../api/workout/getWorkouts';
import WorkoutHistoryElement from './WorkoutHistoryElement';

const WorkoutHistoryList: React.FC<{ lastWorkouts: TLastWorkout[] | undefined}> = ({ lastWorkouts }) => {
  return (
    <main className='flex flex-col mx-auto w-full md:w-3/4'>

      {lastWorkouts?.map(workout => (
        <WorkoutHistoryElement key={workout.workoutId} workout={workout} />
      ))}
    </main>
  );
};

export default WorkoutHistoryList;