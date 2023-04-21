import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getExerciseSelectList, TExerciseSelectList } from '../../api/workout/getExerciseSelectList';
import { Button, Select } from '@mantine/core';

const ExerciseSelectList: React.FC<{ value: string | null, setValue: Dispatch<SetStateAction<string | null>>; addExercise: () => void, isLoading: boolean} > = ({ value, setValue, addExercise, isLoading }) => {
  const [selectList, setSelectList] = useState<TExerciseSelectList[]>([]);
  useEffect(() => {
    getExerciseSelectList().then(response =>
      setSelectList(response.data)
    );
  }, []);

  const selectListDataSet = selectList.map((item) => (
    { value: item.exerciseTypeId.toString(), label: item.name }
  ));
  return (
    <div className='flex w-full my-4 py-4'>
      <Select
        searchable
        clearable
        placeholder="Dodaj ćwiczenie"
        data={selectListDataSet}
        value={value}
        onChange={setValue}
        className='w-full'
      />
      <Button onClick={addExercise}  disabled={!value && isLoading} >Dodaj ćwiczenie</Button>
    </div>
  );
};
export default ExerciseSelectList;