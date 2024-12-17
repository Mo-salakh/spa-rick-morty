import React from 'react';
import './formStyle.css'
import { Route,  Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Episodes } from './components/Episodes';
import { Heroes } from './components/Heroes';
import { Hero } from './components/Hero';
import { Locations } from './components/Locations';
import { Episod } from './components/Episod';
import { Location } from './components/Location';
import { NotFound } from './components/notFound';
import { HomeLayout } from './layout/HomeLayout';
import { Signin } from './components/Signin';
import { PrivateRouters } from './components/PrivateRoutes';
import { AuthLayout } from './layout/AuthLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='heroes' element={<PrivateRouters><Heroes /></PrivateRouters>}>
            <Route path=":id" element={<Hero />} />
          </Route>
          <Route path='locations' element={<PrivateRouters><Locations /></PrivateRouters>}>
            <Route path=':id' element={<Location />} />
          </Route>
          <Route path='episodes' element={<PrivateRouters><Episodes /></PrivateRouters>}>
            <Route path=':id' element={<Episod />} />
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
