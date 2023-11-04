import React from 'react'
import { useParams } from 'react-router-dom'
import FormularioSup from '../../../components/FormularioSup'
export const Editsup = () => {
  const{id} = useParams()
  return (
    <FormularioSup id={id} title='Edit Supplier'></FormularioSup>
  )
}
