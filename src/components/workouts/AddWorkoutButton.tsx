import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const AddWorkoutButton = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  return (
    <div className='w-full'>
      <button className='text-white w-full text-lg bg-main-color p-4 rounded-lg' onClick={() => navigate(`/user/${userContext?.userId}/add-workout`)}>Dodaj trening+</button>
    </div>
  );
};
export default AddWorkoutButton;