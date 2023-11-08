import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Standart } from './Standart/Standart'
import { CreateCS } from './Standart/createCS'
import { EditCS } from './Standart/editCS'
import { Premium } from './Premium/Premium'
import { Add } from './Premium/add'
import { Edit } from './Premium/edit'
import { Reservas } from '../Reservas'
function RutasClient ()  {
  return (
    <div>
    <Routes>
      <Route path="clientstandart" element={<Standart />} />
      <Route path="createClientstandart" element={<CreateCS />} />
      <Route path="editClientStandart/:id" element={<EditCS/>} />
      <Route path="bookings" element={<Reservas />} ></Route>

      <Route path="clientpremium" element={<Premium />} />
      <Route path="createClientpremium" element={<Add />} />
      <Route path="editClientPremium/:id" element={<Edit />} />
      <Route path="bookings" element={<Reservas />} ></Route>
    </Routes>
  </div>
  )
}
export default RutasClient
