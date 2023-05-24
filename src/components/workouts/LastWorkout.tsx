import { TLastWorkout } from '../../api/workout/getWorkouts';
import { Card } from '@mantine/core';
import KeyVal from '../common/KeyVal';

const LastWorkout:React.FC<{lastWorkout: TLastWorkout | undefined}> = ({lastWorkout}) => {
  return (
    <Card shadow='lg'  radius='md'> 
       <div className='flex'>
          <div className='w-1/3 p-4'>
            <div className='text-xl font-semibold'>Ostatni trening</div>
            <div className='font-light'>{lastWorkout?.name }</div>
          </div>
          <div className='flex gap-3 w-2/3'>
            <KeyVal label='Data' value={lastWorkout ? lastWorkout?.date.split('T')[0] : '-'} />
            <KeyVal label='Liczba ćwiczeń:' value={lastWorkout ? lastWorkout?.numberOfExercises.toString() : "-"} />
          </div>
        </div>
    </Card>
  )
}

export default LastWorkout;