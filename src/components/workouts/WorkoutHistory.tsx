import { TWorkouts } from "../../api/workout/getWorkouts";
import { useGetWorkout } from "../../api/workout/getWorkout";

import LastWorkout from './LastWorkout';
import { Card } from "@mantine/core";
import KeyVal from "../common/KeyVal";

import { FiActivity } from "react-icons/fi";

const WorkoutHistory: React.FC<{
  workouts: TWorkouts[] ;
}> = ({ workouts }) => {

  return (
    <div>
      <LastWorkout workoutId={workouts?.[0].workoutId} />
      <div className="flex">
        {workouts?.length > 2 && <WorkoutHistoryElement workoutId={workouts?.[1].workoutId} />}
        {workouts?.length > 3 && <WorkoutHistoryElement workoutId={workouts?.[2].workoutId} />}
      </div>
    </div>
  );
};
export default WorkoutHistory;

const WorkoutHistoryElement: React.FC<{
  workoutId: number | undefined;
}> = ({ workoutId }) => {
  const {data} = useGetWorkout(workoutId);

  return (
    <div className="w-full m-2 my-4 ">
      <Card shadow="lg" radius="md">
        <div className="flex text-xl w-full">
          <FiActivity /> {data?.name}
        </div>
        <div>
          <KeyVal
            label="Data"
            value={data ? data?.date.split("T")[0] : "-"}
          />
          <KeyVal
            label="Liczba ćwiczeń"
            value={data ? data.numberOfExercises.toString() : "-"}
          />
        </div>
      </Card>
    </div>
  );
};
