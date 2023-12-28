import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';


const Home = lazy(() => import('../pages/Home'));
const Teachers = lazy(() => import('../pages/Teachers'));
const Favorites = lazy(() => import('../pages/Favorites'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
         <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
