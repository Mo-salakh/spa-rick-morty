import './formStyle.css'
import { Route,  Routes } from 'react-router-dom';
import { HomeLayout } from './layout/HomeLayout';
import { PrivateRouters } from './components/PrivateRoutes';
import { AuthLayout } from './layout/AuthLayout'
import { Signin } from './components/Signin'
import { lazy } from 'react';

function App() {

  const Home = lazy(() => import('./pages/Home').then((module) => ({default: module.Home})))
  const Characters = lazy(() => import('./pages/Characters').then((module) => ({default: module.Characters})))
  const Locations = lazy(() => import('./pages/Locations').then((module) => ({default: module.Locations})))
  const Episodes = lazy(() => import('./pages/Episodes').then((module) => ({default: module.Episodes})))
  const NotFound = lazy(() => import('./pages/notFound').then((module) => ({default: module.NotFound})))
  const Character = lazy(() => import('./components/Character').then((module) => ({default: module.Character})))
  const Location = lazy(() => import('./components/Location').then((module) => ({default: module.Location})))
  const Episode = lazy(() => import('./components/Episode').then((module) => ({default: module.Episode})))

  return (
    <>
      <Routes basename='/spa-rick-morty'>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='characters' element={<PrivateRouters><Characters /></PrivateRouters>}>
            <Route path=":id" element={<Character />} />
          </Route>
          <Route path='locations' element={<PrivateRouters><Locations /></PrivateRouters>}>
            <Route path=':id' element={<Location />} />
          </Route>
          <Route path='episodes' element={<PrivateRouters><Episodes /></PrivateRouters>}>
            <Route path=':id' element={<Episode />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='auth' element={<AuthLayout />} />
        <Route path='login' element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
