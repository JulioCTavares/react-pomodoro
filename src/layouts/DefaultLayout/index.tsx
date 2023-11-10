import { Header } from '../../components';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles';

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default DefaultLayout;
