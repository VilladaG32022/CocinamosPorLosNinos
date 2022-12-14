import { React, useState, useEffect } from 'react';
import { Form, Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import '../FormDetails/Form.css';

import { validate } from '../../utils/validate';
import { links } from '../../utils/constants';

const UserDetails = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    dateOfBirth: '',
    email: '',
    telephone: '',
    status: 'P',
    neighborhood: '',
  });

  const [neighborhoods, setNeighborhoods] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const neighborhood = await Axios.get('https://deploy-hernan.herokuapp.com/Neighborhoods/');
      setNeighborhoods(neighborhood.data);
      console.log('Neighbors received');
    };
    fetchData().catch(console.error);
  }, []);

  const [errors, setErrors] = useState({});
  const handleInputChange = function (e) {
    console.log('handleChange -> ' + e.target.name + ' : ' + e.target.value);
    setInput({
      ...input, //... spread operator
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    if (Object.keys(errors).length === 0) {
      console.table(input);
      Axios.post('https://deploy-hernan.herokuapp.com/Inscriptions/', {
        first_name: input.first_name,
        last_name: input.last_name,
        dateOfBirth: input.dateOfBirth,
        email: input.email,
        telephone: input.telephone,
        status: 'P',
        neighborhood: input.neighborhood,
      })
        .then((res) => {
          navigate(links.SUCCESS);
          console.log('Posting Data', res);
        })
        .catch((err) => {   
          console.log('Invalid Form', err);       
          console.log('Invalid Email', err.response.data.email);
          alert('Controla tus datos. Puede que el mail ya este registrado o no hayas ingresado un dato correctamente', err.response.data.email);
          e.preventDefault();
        });
    }
  };

  return (
    <div>
      <Card className="form__card__container">
        <div className="form__header">
          <h3 className="form__title">Formulario de Inscripci??n</h3>
        </div>

        <Card.Body className="form__card">
          <Form>
            <div className="form__card__labels">
              <Form.Group className="mb-3">
                <input onChange={handleInputChange} className={`${errors.first_name && 'danger'}`} type="text" name="first_name" value={input.first_name} placeholder="Nombre" />
                {errors.first_name && <p className="danger"> {errors.first_name} </p>}
              </Form.Group>

              <Form.Group className="mb-3">
                <input onChange={handleInputChange} className={`${errors.last_name && 'danger'}`} type="text" name="last_name" value={input.last_name} placeholder="Apellido" />
                {errors.last_name && <p className="danger"> {errors.last_name} </p>}
              </Form.Group>

              <Form.Group className="mb-3">
                <input
                  onChange={handleInputChange}
                  className={`${errors.dateOfBirth && 'danger'}`}
                  type="text"
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  name="dateOfBirth"
                  value={input.dateOfBirth}
                  placeholder="Fecha de Nacimiento"
                />
                {errors.dateOfBirth && <p className="danger"> {errors.dateOfBirth} </p>}
              </Form.Group>

              <Form.Group className="mb-3">
                <input onChange={handleInputChange} className={`${errors.email && 'danger'}`} type="text" name="email" value={input.email} placeholder="Email" />
                {errors.email && <p className="danger"> {errors.email} </p>}
              </Form.Group>

              <Form.Group className="mb-3">
                <input onChange={handleInputChange} className={`${errors.telephone && 'danger'}`} type="text" name="telephone" value={input.telephone} placeholder="Telefono" />
                {errors.telephone && <p className="danger"> {errors.telephone} </p>}
              </Form.Group>

              <Form.Group className="mb-3">
                <select onChange={handleInputChange} className={`${errors.neighborhood && 'danger'}`} type="text" name="neighborhood" value={input.neighborhood} placeholder="Barrio">
                  <option value={0}>Barrio</option>
                  {neighborhoods.map((item) => (
                    <option value={item.id}>{item.neighborhood}</option>
                  ))}
                </select>
                {errors.neighborhood && <p className="danger"> {errors.neighborhood} </p>}
              </Form.Group>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button className="form__button__send" type="submit" onClick={handleSubmit}>
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
