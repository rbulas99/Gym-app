import { useContext, useState } from 'react';
import { useGetWorkouts } from '../api/workout/getWorkouts';
import { UserContext } from '../context/userContext';

import UserHeader from '../components/user/UserHeader';
import WorkoutHistory from '../components/workouts/WorkoutHistory';
import EditUserModal from '../components/user/EditUserModal';


const ViewUser = () => {
  const userContext = useContext(UserContext);
  const {data} = useGetWorkouts(userContext?.userId);
  const [opened, setOpened] = useState(false);
  const hasWorkouts = !!data?.length;
  return (
    <>
    <div className='w-full px-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:my-12 '>
      <div>
        <UserHeader />
        <div className='w-full'>
          <button className='text-white w-full text-lg bg-main-color p-4 rounded-lg' onClick={() => setOpened(true)} >Edytuj użytkownika</button>
        </div>      </div>
      <div className='my-4 '>
        {hasWorkouts && <WorkoutHistory workouts={data} />}
      </div>
    </div>
    <EditUserModal opened={opened} setOpened={setOpened} />
    </>
  );
};

export default ViewUser;