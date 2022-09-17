import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import Axios from "axios";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const AddressDetails = ({ handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  const {
    address,
    postCode,
    firstName,
    dateOfBirth,
    lastName,
    email,
    telephone,
  } = values;

  const postData = () => {
    console.log("Hola");
    Axios.post("http://127.0.0.1:8000/PersonTable/", {
      address,
      postCode,
      firstName,
      dateOfBirth,
      lastName,
      email,
      telephone,
    })
      .then((res) => {
        console.log("Posting Data", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    console.log("enviado");
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.address) ||
      validator.isEmpty(values.postCode)
    ) {
      setError(true);
    } else {
      postData();
    }
  };

  return (
    <>
      <Card className="form__card__container">
        <div className="form__header">
          <h3 className="form__title">Formulario</h3>
        </div>
        <Card.Body className="form__card">
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                defaultValue={values.address}
                name="address"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                onChange={handleFormData("address")}
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
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.postCode}
                name="postCode"
                type="number"
                min="0"
                onChange={handleFormData("postCode")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Este campo es obligatorio
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button className="form__button" onClick={prevStep}>
                Volver
              </Button>

              <Button
                className="form__button"
                type="submit"
                onClick={submitFormData}
              >
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default AddressDetails;
