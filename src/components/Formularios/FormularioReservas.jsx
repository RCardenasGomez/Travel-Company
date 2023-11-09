import React, {useState} from 'react'
import DivinputR from '../Inputs/DivinputR';
import { sendrequest } from '../../functions';
export const FormularioReservas = (params) => {
  const [cant_positions, setCant_positions] = useState('');
  const [id_flight, setId_Flight] = useState('');
  const [id_client, setId_Client] = useState('');
  const [typeClient, setTypeClient] = useState('');
  const [typeFlight, setTypeFlight] = useState('');
  let method = 'POST'
  let url = '/bookings/add/booking'
  let redirect = '/flight/bookings/bill'
  const save = async (e) => {
    e.preventDefault()
    const res = await sendrequest(method, {cant_positions:cant_positions, id_flight:id_flight, id_client:id_client, type_client:typeClient, type_flight:typeFlight}, url, redirect)
    if (method == 'POST' && res.status == true) {
      setCant('')
      setId_Flight('')
      setId_Client('')
      setTypeClient('')
      setTypeFlight('')
      redirect = '/flight/bookings/bill'

    }
  }
  return (
    <div className="form-outline mb-4">
      <form onSubmit={save}>
        <DivinputR type='number' icon='fa-building'
          value={cant_positions} className='form-control' placeholder='Cant_Positions' handleChange={(e) => setCant_positions(e.target.value)} />
        <DivinputR type='number' icon='fa-building'
          value={id_flight} className='form-control' placeholder='Id_vuelo' handleChange={(e) => setId_Flight(e.target.value)} />
        <DivinputR type='number' icon='fa-building'
          value={id_client} className='form-control' placeholder='Id_cliente' handleChange={(e) => setId_Client(e.target.value)} />
        <DivinputR type='text' icon='fa-building'
          value={typeClient} className='form-control' placeholder='Tipo de Cliente' handleChange={(e) => setTypeClient(e.target.value)} />
        <DivinputR type='text' icon='fa-building'
          value={typeFlight} className='form-control' placeholder='Tipo de vuelo' handleChange={(e) => setTypeFlight(e.target.value)} />
        <div className='d-grid col-10  mx-auto'>
          <button className='btn btn-dark'>
            <i className='fa-solid fa-save'></i>
            Guardar</button>
        </div>
      </form>
    </div>
  )
}
