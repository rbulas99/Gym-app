import { TExercise } from "../../api/workout/getWorkout";
import WorkoutExerciseListItem from "./WorkoutExerciseListItem";

type WorkoutExercisesListProps = {
  exercises: TExercise[] | undefined;
  refetch: () => void;
};

const WorkoutExercisesList: React.FC<WorkoutExercisesListProps> = ({ exercises, refetch }) => {
  return (
    <>
      {exercises?.map((exercise) => (
        <WorkoutExerciseListItem
          key={exercise.exerciseId}
          exercise={exercise}
          refetch={refetch}
        />
      ))}
    </>
  );
};

export default WorkoutExercisesList;
