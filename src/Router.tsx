import { Route, Routes } from 'react-router-dom';
import { Home, History } from './pages';
import { DefaultLayout } from './layouts';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
