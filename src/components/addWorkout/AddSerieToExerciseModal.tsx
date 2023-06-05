import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postAddSerieToExercise } from "../../api/workout/postAddSerieToExercise";

import { showNotification } from "@mantine/notifications";

import { Button, Group, Modal, TextInput } from "@mantine/core";

const schema = yup
  .object()
  .shape({
    reps: yup.number().required(),
    weight: yup.number().required(),
  })
  .required();

type AddSerieToExerciseModalProps = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  exerciseId: number;
  refetch: () => void;
};

const AddSerieToExerciseModal: React.FC<AddSerieToExerciseModalProps> = ({ opened, setOpened, exerciseId, refetch }) => {
  const onSuccess = () => {
    setOpened(false);
    refetch();
    showNotification({
      message: "Dodano pomyślnie",
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
    (data: FieldValues) => postAddSerieToExercise(exerciseId, data),
    { onSuccess: onSuccess, onError: onError }
  );

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Modal
        title="Dodaj serie"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <form onSubmit={handleSubmit((data) => mutate(data))}>
          <TextInput {...register("reps")} label="Liczba powtórzeń" />
          <TextInput {...register("weight")} label="Ciężar" />
          <Group position="right">
            <Button type="submit" my="sm" disabled={isLoading}>
              Dodaj
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default AddSerieToExerciseModal;
