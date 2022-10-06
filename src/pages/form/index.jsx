import { Button } from 'react-bootstrap';
import React from 'react';

export default function SuccessForm(props) {
  return (
        <div className="validate__card">
        <h1 className="validate__title">Formulario enviado Correctamente</h1>
        <h3 className="validate__card-text">Dentro de unos dias sera informado sobre su postulacions y su aceptacion. Muchas gracias por aportar a Cocinamos por los niños.</h3>
        <Button className="validate__card-link" variant='success' href='/'>Volver al Inicio</Button>
        </div>
  );
}
