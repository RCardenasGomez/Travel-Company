import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {storage} from '../Storage/storage'
export const Nav = () => {
  const go= useNavigate()
  const logout =async()=>{
    storage.remove('authToken')
    storage.remove('authUser')
    await axios.get('/api/auth/logout',storage.get('authToken'))
    go('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TravelCompany</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        </div>
      </div>
      {!storage.get('authUser')? (
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='navbar-nav mx-auto mb-2'>
            <li className='nav-item px-lg-5 h4'></li>
            <li className='nav-item px-lg-5'><Link to='/' className='nav-link'>Manage Trip</Link></li>
            <li className='nav-item px-lg-5'><Link to='/supplier' className='nav-link'>Proveedores</Link></li>
            <li className='nav-item px-lg-5'><Link to='/flight' className='nav-link'>Vuelos</Link></li>
          </ul>
          <ul className='collapse navbar-collapse'>
          <button type="button" className="btn btn-secondary btn-lg" onClick={logout}>Logout</button>
          </ul>
        </div>
      ): ''}
    </nav>
  )
}
