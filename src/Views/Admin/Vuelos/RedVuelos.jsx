import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from '../../../components/Nav';
import { StandartClass } from './StandartClass';
import { FirstClass } from './FirstClass';
import { CreateFligth } from './createFligth';
import { EditFligth } from './editFligth';

function RedVuelos() {
  return (
    <div>
      <Routes>
        <Route path="standart" element={<StandartClass />} />
        <Route path="createStandart" element={<CreateFligth />} />
        <Route path="editStandart/:id" element={<EditFligth />} />

        <Route path="first" element={<FirstClass />} />
        <Route path="createFirst" element={<CreateFligth />} />
        <Route path="editFirst/:id" element={<EditFligth />} />
      </Routes>
    </div>
  );
}

export default RedVuelos;