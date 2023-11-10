import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
