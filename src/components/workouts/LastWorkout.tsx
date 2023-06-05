import { Card } from '@mantine/core';
import KeyVal from '../common/KeyVal';
import { TWorkout, useGetWorkout } from '../../api/workout/getWorkout';

const LastWorkout:React.FC<{workoutId: number | undefined}> = ({workoutId}) => {
  const {data} = useGetWorkout(workoutId)
  return (
    <Card shadow='lg'  radius='md'> 
       <div className='flex'>
          <div className='w-1/3 p-4'>
            <div className='text-xl font-semibold'>Ostatni trening</div>
            <div className='font-light'>{data?.name }</div>
          </div>
          <div className='flex gap-3 w-2/3'>
            <KeyVal label='Data' value={data ? data?.date.split('T')[0] : '-'} />
            <KeyVal label='Liczba ćwiczeń:' value={data ? data?.numberOfExercises.toString() : "-"} />
          </div>
        </div>
    </Card>
  )
}

export default LastWorkout;