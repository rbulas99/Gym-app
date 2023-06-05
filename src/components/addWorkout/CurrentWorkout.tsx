import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postAddExerciseToWorkout } from "../../api/workout/postAddExerciseToWorkout";

import { Card } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import WorkoutExercisesList from "./WorkoutExercisesList";
import ExerciseSelectList from "./ExerciseSelectList";
import KeyVal from "../common/KeyVal";
import { useGetWorkout } from "../../api/workout/getWorkout";
import { TWorkouts } from "../../api/workout/getWorkouts";

type CurrentWorkoutProps = { workout: TWorkouts | undefined }

const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({ workout }) => {
  const [value, setValue] = useState<string | null>(null);
  const { data, refetch } = useGetWorkout(workout?.workoutId);

  const onSuccess = () => {
    refetch();
    setValue(null);
    showNotification({
      message: "Dodano ćwiczenie",
      color: "teal",
    });
  };
  const onError = () => {
    showNotification({
      message: "Wystąpił błąd",
      color: "red",
    });
  };

  const { mutate, isLoading } = useMutation(
    () => postAddExerciseToWorkout(data?.workoutId, Number(value)),
    { onSuccess: onSuccess, onError: onError }
  );

  return (
    <div className="flex flex-col mx-auto w-full md:w-3/4">
      <Card shadow="lg" radius="md" m="lg">
        <div className="flex py-8">
          <div className="w-2/3 p-4">
            <div className="text-xl font-semibold">{data?.name}</div>
          </div>
          <div className="flex gap-3 w-1/3">
            <KeyVal
              label="Data"
              value={data ? data?.date.split("T")[0] : "-"}
            />
          </div>
        </div>
        <WorkoutExercisesList
          exercises={data?.exercises}
          refetch={() => refetch()}
        />
        <ExerciseSelectList
          value={value}
          setValue={setValue}
          addExercise={mutate}
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
};

export default CurrentWorkout;
