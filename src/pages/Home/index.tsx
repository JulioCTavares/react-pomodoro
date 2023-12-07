import { HandPalm, Play } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { CountDownButton, HomeContainer, StopCountDownButton } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Countdown, NewCycleForm } from './components';
import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = z.object({
  task: z.string(),
  minutes: z.number(),
});

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    },
  });

  const { handleSubmit, watch /*reset */ } = newCycleForm;

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <CountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </CountDownButton>
        )}
      </form>
    </HomeContainer>
  );
};

export default Home;
