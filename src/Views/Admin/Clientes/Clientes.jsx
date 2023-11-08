import React from 'react'
import { Link } from 'react-router-dom'
export const Clientes = () => {
  return (
    <div className="container">
      <h2 className="my-4"></h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Clientes Estándar</h5>
              <p className="card-text"></p>
              <Link to="standart" className="btn btn-success btn-lg mr-3">
                Ver Cliente
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Clientes Premium</h5>
              <p className="card-text"></p>
              <Link to="clientpremium" className="btn btn-danger btn-lg">
                Ver Cliente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Clientes
