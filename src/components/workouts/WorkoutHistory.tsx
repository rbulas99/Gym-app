import { TLastWorkout } from '../../api/workout/getWorkouts';

import { Card } from '@mantine/core';
import KeyVal from '../common/KeyVal';

import { FiActivity } from 'react-icons/fi';

const WorkoutHistory: React.FC<{ lastWorkouts: TLastWorkout[] | undefined; }> = ({ lastWorkouts }) => {
  return (
    <div className='flex'>
      <WorkoutHistoryElement workout={lastWorkouts?.[1]} />
      <WorkoutHistoryElement workout={lastWorkouts?.[2]} />
    </div>
  );
};
export default WorkoutHistory;

const WorkoutHistoryElement: React.FC<{ workout: TLastWorkout | undefined }> = ({ workout }) => {
  return (
    <div className='w-full m-2 my-4 ' >
      <Card shadow='lg' radius='md' >
        <div className='flex text-xl w-full'>
          <FiActivity />  {workout?.name}</div>
        <div >
          <KeyVal label="Data" value={ workout ? workout?.date.split('T')[0] : "-"}  />
          <KeyVal label="Liczba ćwiczeń" value={'5'} />
        </div>
      </Card>
    </div>

  );
};