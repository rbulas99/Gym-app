import { Button } from "@mantine/core";
import { AiFillDelete } from "react-icons/Ai";

type DeleteButtonProps = { onClick: () => void; disabled: boolean };

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, disabled }) => {
  return (
    <Button variant="outline" color="red" onClick={onClick} disabled={disabled}>
      <AiFillDelete />
    </Button>
  );
};
export default DeleteButton;
