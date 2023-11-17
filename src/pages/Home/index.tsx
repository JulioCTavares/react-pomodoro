import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import {
  CountDownButton,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  TextInput,
} from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const newCycleFormValidationSchema = z.object({
  task: z.string(),
  minutes: z.number(),
});

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    },
  });

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    reset();
  };

  const task = watch('task');

  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TextInput
            id="task"
            list="task-suggestions"
            placeholder="Digite sua tarefa"
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
            min={5}
            max={60}
            {...register('minutes', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <CountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </CountDownButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
