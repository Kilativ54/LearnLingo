import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Teachers = lazy(() => import('../pages/Teachers'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Teachers />} />
         <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
