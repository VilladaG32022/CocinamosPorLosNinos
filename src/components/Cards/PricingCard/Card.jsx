import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBIcon, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import '../PricingCard/PricingCard.css';

export default function App(props) {
  const { btntext } = props;
  return (
    <MDBCard className='pricing__card'>
      <MDBCardHeader className='pricing__header'>
        <MDBCardTitle className="pricing__title">
          {btntext}
        </MDBCardTitle>
      </MDBCardHeader>
      <Button className='pricing__button'>
        DONAR
      </Button>
    </MDBCard>
  );
}
