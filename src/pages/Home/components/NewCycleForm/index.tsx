import { useContext } from 'react';
import { FormContainer, MinutesInput, TextInput } from './styles';
import { CyclesContext } from '../..';
import { useFormContext } from 'react-hook-form';

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TextInput
        id="task"
        list="task-suggestions"
        placeholder="Digite sua tarefa"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutes">durante</label>
      <MinutesInput
        id="minutes"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutes', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
};

export default NewCycleForm;
