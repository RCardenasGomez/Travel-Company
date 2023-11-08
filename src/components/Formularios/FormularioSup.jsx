import React,{useEffect,useState,useRef} from 'react'
import {sendrequest} from '../../functions'
import DivinpuntSup from '../Inputs/DivinpuntSup';
export  const FormularioSup = (params) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    let method= 'POST'
    let url= '/supplier/add/supplier'
    let redirect = '/supplier'
    useEffect(()=> {
        getSupplier()
    },)
    const getSupplier = async () => {
        if (params.id !== null) {
          const res = await sendrequest('GET', '', ('/supplier/get/supplier/' + params.id));
          if (res && res.data) {
            setName(res.data.name || '');
            setContact(res.data.contact || '');
            setDescription(res.data.description || '');
          }
        }
      };
    const save= async(e) =>{
        e.preventDefault()
        if(params.id !== null){
            method='PUT'
            url='/supplier/edit/supplier/' + params.id
            redirect='/supplier'
        }
        const res= await sendrequest(method, {name:name, contact:contact , description:description} ,url, redirect)
        if(method == 'POST' && res.status == true){
            setName('')
            setContact('')
            setDescription('')
            redirect='/supplier'

        }
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
                          <DivinpuntSup type='text' icon='fa-building' 
                            value={name} className='form-control' placeholder='Name'  handleChange={(e) =>setName(e.target.value)} /> 
                            <DivinpuntSup type='text' icon='fa-building' 
                            value={contact} className='form-control' placeholder='Contact' handleChange={(e) =>setContact(e.target.value)} /> 
                            <DivinpuntSup type='text' icon='fa-building' 
                            value={description} className='form-control' placeholder='Description'  handleChange={(e) =>setDescription(e.target.value)} /> 
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
export default FormularioSup