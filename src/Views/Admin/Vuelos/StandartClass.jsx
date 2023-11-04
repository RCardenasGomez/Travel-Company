import React, {useState,useEffect} from 'react'
import { DivAdd } from '../../../components/DivAdd'
import { Divtable } from '../../../components/Divtable'
import {Link} from 'react-router-dom'
import {confirmation, sendrequest} from '../../../functions'
export const StandartClass = () => {
  const [vuelos, setVuelos] = useState([])
  const [classLoad, setClassload] = useState('')
  const [classTable, setTable] = useState('')
  useEffect(()=>{
    getVuelos()
  }, [])
  const getVuelos = async () =>{
    const res =await sendrequest('GET','','/flight/get/flights/all/standart_class','')
    setVuelos(res)
    setTable('')
    setClassload('d-none')
  }
  const deleteVuelos= (id,name)=>{
    confirmation(name,('/flight/delete/flight/'+ id + '/standart%20class' ),'')

  }
  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='/flight/createStandart' className='btn btn-dark'>
          <i className='fa-solid fa-circle-plus '></i>
          Agregar</Link>
      </DivAdd>
      <Divtable col='9' off='8' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>
          <thead><tr><th></th><th>#</th><th>Origin</th><th>Destination</th><th>Date</th><th>Position</th><th>Hour</th><th>Agency</th><th>Cost</th></tr></thead>
          <tbody className='table-group-divider'>
            {vuelos.map((row,i)=> (
              <tr key={row.id}>
                <td></td>
                <td>{i+1}</td>
                <td>{row.origin}</td>
                <td>{row.destination}</td>
                <td>{row.date}</td>
                <td>{row.positions}</td>
                <td>{row.hour}</td>
                <td>{row.id_agency}</td>
                <td>{row.cost}</td>
                <td>
                  <Link to={'/flight/editStandart/'+row.id} className='btn btn-warning'>
                    <i className='fa-solid fa-edit'>Editar</i>
                  </Link>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=> deleteVuelos(row.id,row.origin,row.destination,row.date,row.positions,row.hour,row.id_agency,row.cost)}>
                  <i className='fa-solid fa-trash'>Eliminar</i>
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </Divtable>

    </div>
  )
}
