import { Play } from 'phosphor-react';
import {
  CountDownButton,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  TextInput,
} from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TextInput id="task" placeholder="Digite sua tarefa" />

          <label htmlFor="minutes">durante</label>
          <MinutesInput id="minutes" type="number" placeholder="00" />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <CountDownButton type="submit">
          <Play size={24} />
          Começar
        </CountDownButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
