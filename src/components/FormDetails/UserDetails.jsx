import { React, useState, useEffect } from 'react';
import { Form, Card, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';


import '../FormDetails/Form.css';

import { validate } from '../../utils/validate';

const UserDetails = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    dateOfBirth: '',
    email: '',
    telephone: '',
    neighborhood: '',
  });

  const [neighborhoods, setNeigborhoods] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const neighborhood = await Axios.get('https://deploy-hernan.herokuapp.com/Neighborhoods/');
      setNeigborhoods(neighborhood.data);
      console.log('Neigbors received');
    };
    fetchdata().catch(console.error);
  }, []);

  const [errors, setErrors] = useState({});
  const handleInputChange = function (e) {
    setInput({
      ...input, //... spread operator
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
      );
      
      if (Object.keys(errors).length === 0) {
        Axios.post('https://deploy-hernan.herokuapp.com/Inscriptions/', {
          first_name: input.first_name,
          last_name: input.last_name,
          dateOfBirth: input.dateOfBirth,
          email: input.email,
          telephone: input.telephone,
          neighborhood: input.neighborhood,
        })
        .then((res) => {
          console.log('Posting Data');
          navigate('/successform');
        })
        .catch((err) => {
          console.log('Invalid Data', err);
          e.preventDefault();
        });
      }
  };



  return (
    <div>
      <Card className="form__card__container">
        <div className="form__header">
          <h3 className="form__title">Formulario de Inscripción</h3>
        </div>

        <Card.Body className="form__card">
          <Form >
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
                <input onChange={handleInputChange} className={`${errors.dateOfBirth && 'danger'}`} type="date" name="dateOfBirth" value={input.dateOfBirth} placeholder="Edad" />
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
                  {neighborhoods.map((item) => (
                    
                    <option value={item.id}>
                      {item.neighborhood}</option>
                  ))}
                </select>
                {errors.neighborhood && <p className="danger"> {errors.neighborhood} </p>}
              </Form.Group>
               
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button className="form__button__send" type="submit" onClick={postData} >
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
