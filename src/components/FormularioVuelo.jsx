import React,{useEffect,useState,useRef} from 'react'
import {sendrequest} from '../functions'
import DivinputV from './DivinputV';
export  const FormularioVuelo = (params) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [positions, setPositions] = useState('')
    const [hour, setHour] = useState('')
    const [id_agency, setId_agency] = useState('')
    const [premium_cost, setPremium_cost] = useState('')
    let method= 'POST'
    let url= '/flight/add/firtsclass'
    let redirect = '/flight/first'
    useEffect(()=> {
        getSupplier()
    },)
    const getSupplier = async () => {
        if (params.id !== null) {
          const res = await sendrequest('GET', '', ('/flight/get/flights/'+params.id + '/firts_class'));
          if (res && res.data) {
            setOrigin(res.data.origin || '');
            setDestination(res.data.destination || '');
            setDate(res.data.date || '');
            setPositions(res.data.positions|| '');
            setHour(res.data.hour|| '')
            setId_agency(res.data.id_agency|| '')
            setPremium_cost(res.data.premium_cost|| '')
          }
        }
      };
    const save= async(e) =>{
        e.preventDefault()
        if(params.id !== null){
            method='PUT'
            url='/flight/edit/firtsclass/' + params.id
            redirect='/flight/first'
        }
        const res= await sendrequest(method, {origin:origin, destination:destination , date:date, positions:positions, hour:hour, id_agency:id_agency, premium_cost:premium_cost} ,url, redirect)
        console.log(res)
        if(method == 'POST' && res.status == true){
            setOrigin('');
            setDestination('');
            setDate('');
            setPositions('');
            setHour('')
            setId_agency('')
            setPremium_cost('')
            redirect='/flight/first'

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
                          <DivinputV type='text' icon='fa-building' 
                            value={origin} className='form-control' placeholder='Origin'  handleChange={(e) =>setOrigin(e.target.value)} /> 
                            <DivinputV type='text' icon='fa-building' 
                            value={destination} className='form-control' placeholder='Destination' handleChange={(e) =>setDestination(e.target.value)} /> 
                            <DivinputV type='date' icon='fa-building' 
                            value={date} className='form-control' placeholder='Date'  handleChange={(e) =>setDate(e.target.value)} /> 
                            <DivinputV type='number' icon='fa-building' 
                            value={positions} className='form-control' placeholder='Position'  handleChange={(e) =>setPositions(e.target.value)} /> 
                            <DivinputV type='number' icon='fa-building' 
                            value={hour} className='form-control' placeholder='Hour'  handleChange={(e) =>setHour(e.target.value)} /> 
                            <DivinputV type='number' icon='fa-building' 
                            value={id_agency} className='form-control' placeholder='Agency'  handleChange={(e) =>setId_agency(e.target.value)} /> 
                            <DivinputV type='number' icon='fa-building' 
                            value={premium_cost} className='form-control' placeholder='Cost'  handleChange={(e) =>setPremium_cost(e.target.value)} /> 
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
export default FormularioVuelo