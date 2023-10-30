import React,{useEffect,useState} from 'react'
import { DivAdd } from '../../../components/DivAdd'
import { Divtable } from '../../../components/Divtable'
import {Link} from 'react-router-dom'
import {confirmation, sendrequest} from '../../../functions'
export const Supplier= () => {
  const [proveedores, setProveedores] = useState([])
  const [classLoad, setClassload] = useState('')
  const [classTable, setTable] = useState('')
  useEffect(()=>{
    getProveedores()
  })
  const getProveedores = async () =>{
    const res =await sendrequest('GET','','/supplier/get/supplier/all','')
    setProveedores(res)
    setTable('')
    setClassload('d-none')
  }
  const deleteProveedores= (id,name)=>{
    confirmation(name,('/supplier/delete/supplier/'+id),'')

  }
  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to={'/create'} className='btn btn-dark'>
          <i className='fa-solid fa-circle-plus '></i>
          Agregar</Link>
      </DivAdd>
      <Divtable col='6' off='3' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>
          <thead><tr><th>#</th><th>Proveedores</th><th>Contacto</th><th>Descripcion</th></tr></thead>
          <tbody className='table-group-divider'>
            {proveedores.map((row,i)=> (
              <tr key={row.id}>
                <td>{i+1}</td>
                <td>{row.name}</td>
                <td>{row.contact}</td>
                <td>{row.Description}</td>
                <td>
                  <Link to={'/edit/'+row.id} className='btn btn-warning'>
                    <i className='fa-solid fa-edit'>Editar</i>
                  </Link>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=> deleteProveedores(row.id,row.name,row.contact,row.Description)}>
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
export default Supplier
