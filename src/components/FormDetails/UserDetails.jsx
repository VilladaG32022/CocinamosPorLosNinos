import { React, useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import validator from 'validator';
import '../FormDetails/Form.css';
import Axios from 'axios';

const UserDetails = ({ handleFormData,  values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  const { address, firstName, dateOfBirth, lastName, email, telephone } = values;

  const postData = () => {
    Axios.post('https://deploy-hernan.herokuapp.com/Inscriptions/', {
      first_name: firstName,
      last_name: lastName,
      telephone: telephone,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address,
      neighborhood: 1,
    })
      .then((res) => {
        console.log('Posting Data');
      })
      .catch((err) => {
        console.log('Invalid Data', err);
      });
  };


  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    console.log('enviado');
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) ||
      validator.isEmpty(values.dateOfBirth) ||
      validator.isEmpty(values.telephone) ||
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.address)
    ) {
      setError(true);
    } else {
      postData();
    }
  };

  return (
    <div>
      <Card className="form__card__container">
        <div className="form__header">
          <h3 className="form__title">Formulario de Inscripcion</h3>
        </div>
        <Card.Body className="form__card">
          <Form onSubmit={submitFormData}>
            <div className="form__card__labels">
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ border: error ? '2px solid red' : ' ' }}
                  name="firstName"
                  defaultValue={values.firstName}
                  type="text"
                  placeholder="Nombre "
                  onChange={handleFormData('firstName')}
                />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  style={{ border: error ? '2px solid red' : '' }}
                  name="lastName"
                  defaultValue={values.lastName}
                  ma
                  type="text"
                  placeholder="Apellido"
                  onChange={handleFormData('lastName')}
                />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control style={{ border: error ? '2px solid red' : '' }} defaultValue={values.dateOfBirth} type="date" name="dateOfBirth" onChange={handleFormData('dateOfBirth')} />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control style={{ border: error ? '2px solid red' : '' }} defaultValue={values.email} type="email" name="email" placeholder="Email" onChange={handleFormData('email')} />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  style={{ border: error ? '2px solid red' : '' }}
                  defaultValue={values.telephone}
                  type="phone"
                  name="telephone"
                  placeholder="Telefono"
                  onChange={handleFormData('telephone')}
                />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control defaultValue={values.address} name="address" style={{ border: error ? '2px solid red' : '' }} type="text" placeholder="Barrio" onChange={handleFormData('address')} />
                {error ? <Form.Text style={{ color: 'red' }}>Este campo es obligatorio</Form.Text> : ''}
              </Form.Group>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button className="form__button__send" type="submit" onClick={submitFormData}>
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
