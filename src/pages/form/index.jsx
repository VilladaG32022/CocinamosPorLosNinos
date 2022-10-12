import { Button } from 'react-bootstrap';
import React from 'react';

export default function SuccessForm(props) {
  return (
    <div className="validate__card">
      <h1 className="validate__title">Formulario enviado correctamente</h1>
      <h3 className="validate__card__text">Dentro de unos dias será informado sobre su aceptación. Muchas gracias por aportar a Cocinamos por los Niños.</h3>
      <Button className="validate__card__button" variant='success' href='/'>Volver al Inicio</Button>
    </div>
  );
}
