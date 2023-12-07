import { HandPalm, Play } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { CountDownButton, HomeContainer, StopCountDownButton } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createContext, useState } from 'react';
import { Countdown, NewCycleForm } from './components';

const newCycleFormValidationSchema = z.object({
  task: z.string(),
  minutes: z.number(),
});

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptDate?: Date;
  finishedDate?: Date;
}

interface CycleContext {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CycleContext);

const Home = () => {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const markCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        }

        return cycle;
      }),
    );
  };

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  };

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() };
        }

        return cycle;
      }),
    );
    setActiveCycleId(null);
  };

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptCycle} type="button">
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
