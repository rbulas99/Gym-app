import { Button } from '@mantine/core';
import { AiFillDelete } from 'react-icons/Ai';

const DeleteButton:React.FC<{onClick: () => void, disabled: boolean}> = ({onClick, disabled}) => {
  return (
    <Button variant='outline' color='red' onClick={onClick} disabled={disabled}><AiFillDelete /></Button>
  )
}
export default DeleteButton;