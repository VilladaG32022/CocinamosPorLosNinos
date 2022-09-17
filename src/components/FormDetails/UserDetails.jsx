import { React, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import "../FormDetails/Form.css";

// creating functional component ans getting props from app.js and destucturing them
const UserDetails = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) ||
      validator.isEmpty(values.dateOfBirth) ||
      validator.isEmpty(values.telephone) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card className="form__card__container">
        <div className="form__header">
          <h3 className="form__title">Formulario</h3>
        </div>
        <Card.Body className="form__card">
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder=""
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder=""
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.dateOfBirth}
                type="date"
                name="dateOfBirth"
                min="1910-01-01"
                max="3000-01-01"
                onChange={handleFormData("dateOfBirth")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.email}
                type="email"
                name="email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.telephone}
                type="phone"
                name="telephone"
                onChange={handleFormData("telephone")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Button className="form__button" type="submit">
              Continuar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
