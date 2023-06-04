import { Dispatch, SetStateAction } from 'react';
import { Button, Select } from '@mantine/core';
import {  useGetExerciseList } from '../../api/workout/getExerciseList';

const ExerciseSelectList: React.FC<{ value: string | null, setValue: Dispatch<SetStateAction<string | null>>; addExercise: () => void, isLoading: boolean} > = ({ value, setValue, addExercise, isLoading }) => {
  const selectList = useGetExerciseList();
 

  const selectListDataSet = selectList.data?.map((item) => (
    { value: item.exerciseTypeId.toString(), label: item.name }
  ));
  return (
    <div className='flex w-full my-4 py-4'>
      <Select
        searchable
        clearable
        placeholder="Dodaj ćwiczenie"
        data={selectListDataSet ? selectListDataSet : []}
        value={value}
        onChange={setValue}
        className='w-full'
      />
      <Button onClick={addExercise}  disabled={!value || isLoading} >Dodaj ćwiczenie</Button>
    </div>
  );
};
export default ExerciseSelectList;