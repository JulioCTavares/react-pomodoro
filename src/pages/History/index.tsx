import { HistoryContainer, HistoryList, Status } from './styles';

const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};

export default History;
