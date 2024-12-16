import React from 'react';
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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='heroes' element={<Heroes />}>
            <Route path=":id" element={<Hero />} />
          </Route>
          <Route path='locations' element={<Locations />}>
            <Route path=':id' element={<Location />} />
          </Route>
          <Route path='episodes' element={<Episodes />}>
            <Route path=':id' element={<Episod />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
