import { useContext } from "react";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { putEditUser } from "../../api/user/putEditUser";
import { useGetUser } from "../../api/user/getUser";
import { UserContext } from "../../context/userContext";

import { Button, Group, Modal, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    weight: yup.number().required(),
    height: yup.number().required(),
  })
  .required();

type EditUserModalProps = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
};
const EditUserModal: React.FC<EditUserModalProps> = ({ opened, setOpened }) => {
  const userContext = useContext(UserContext);

  const user = useGetUser(userContext?.userId);
  const onSuccess = () => {
    setOpened(false);
    user.refetch();
    showNotification({
      message: "Edytowano pomyślnie",
      color: "teal",
    });
  };
  const onError = () => {
    showNotification({
      message: "Wystąpił błąd",
      color: "red",
    });
  };

  const { mutate } = useMutation(
    (data: FieldValues) => putEditUser(userContext?.userId, data),
    { onSuccess: onSuccess, onError: onError }
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: user.data,
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Modal
        title="Edytowanie użytkownika"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <form onSubmit={handleSubmit((data) => mutate(data))}>
          <TextInput {...register("username")} label="Username  " />
          <TextInput {...register("weight")} label="Waga" />
          <TextInput {...register("height")} label="Wzrost" />
          <Group position="right">
            <Button type="submit" my="sm">
              Edit
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default EditUserModal;
