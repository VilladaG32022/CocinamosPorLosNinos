import {React, useEffect} from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import UserDetails from '../FormDetails/UserDetails';
function Form() {
  useEffect(() => {
    console.log('Form initialized');
  });

      return (
        <div className="Form">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <UserDetails />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }

export default Form;
