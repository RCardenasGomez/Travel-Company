import React from 'react';

export const Bill = ({ reservation }) => {
  const { cant_positions, id_flight, id_client, type_client, type_flight } = reservation;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Factura</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <strong>Cliente:</strong> {id_client}
        </div>
        <div className="col-md-6 text-md-end">
          <strong>Fecha:</strong> Fecha de la Factura
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{type_flight}</td>
            <td>{cant_positions}</td>
            <td>$10.00</td>
            <td>${cant_positions * 10.00}</td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>
      <div className="row justify-content-end">
        <div className="col-md-6">
          <div className="total-container">
            <strong>Total:</strong> ${cant * 10.00}
          </div>
        </div>
      </div>
    </div>
  );
};