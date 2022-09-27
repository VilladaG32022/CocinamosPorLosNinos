import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBIcon } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';

import './Card.css'
import { PricingSec } from '../../../utils/constants';

export default function App(props) {
  const { btntext } = props;
  return (
    <>
      {PricingSec.map((label) => (
        <MDBCard>
          <div className="card__container">
            <MDBCardTitle className="donate__title">{label.title ? label.title : 'Dona'}</MDBCardTitle>
            <div className="donate__div">
              <MDBCardText className="donate__text">{label.text}</MDBCardText>
              <Button variant="contained">
                {btntext}
                <MDBIcon fas icon="credit-card" />
              </Button>
            </div>
          </div>
        </MDBCard>
      ))}
    </>
  );
}
