import React from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../../../components/Formulario'
export const Editsup = () => {
  const{id} = useParams()
  return (
    <Formulario id={id} title='Edit Supplier'></Formulario>
  )
}
