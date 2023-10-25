import React,{useEffect,useState,useRef} from 'react'
import {sendrequest} from '../functions'
import Divinpunt from './Divinpunt'
export  const Formulario = (params) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [ërror, setError]= useState('')
    let method= 'POST'
    let url= '/add/supplier'
    let redirect = ''
    useEffect(()=> {
        getSupplier()
    })
    const getSupplier= async() =>{
        if(params.id !== null){
            const res =await sendrequest('GET', '', (url +'/'+ params.id))
            setName(res.data.name)
            setContact(res.data.contact)
            setDescription(res.data.Description)
        }
    }
    const save= async(e) =>{
        e.preventDefault()
        if(validateForm()){
            if(params.id !== null){
                method='PUT'
                url='/add/supplier/' + params.id
                redirect='/'
            }
        const res= await sendrequest(method, {name:name, contact:contact ,Description:description} ,url, redirect)
        if(method == 'POST' && res.status == true){
            setName('')
            setContact('')
            setDescription('')

        }
      }
    }
    const validateForm= () => {
        if(name.trim() == '' || contact.trim()== '' || description.trim()==''){
            setError('El nombre es obligatorio')
            return false
        }
        setError('')
        return true
    }
  return (
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md-4 offset-md-4'>
                <div className='card border border-info'>
                    <div className='card-header bg info border border border-info'>
                        {params.title}
                    </div>
                    <div className='card-body'>
                          <form onSubmit={save}>
                          <Divinpunt type='text' icon='fa-building' 
                            value={name} className='form-control' placeholder='Name' required='required'  handleChange={(e) =>setName(e.target.value)}   /> 
                            <Divinpunt type='text' icon='fa-building' 
                            value={contact} className='form-control' placeholder='Contact' required='required'  handleChange={(e) =>setContact(e.target.value)}  /> 
                            <Divinpunt type='text' icon='fa-building' 
                            value={description} className='form-control' placeholder='Description' required='required'  handleChange={(e) =>setDescription(e.target.value)}  /> 
                             <div className='d-grid col-10  mx-auto'>
                            <button className='btn btn-dark'>
                                <i className='fa-solid fa-save'></i>
                                 Guardar</button>
                          </div>
                          </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
export default Formulario