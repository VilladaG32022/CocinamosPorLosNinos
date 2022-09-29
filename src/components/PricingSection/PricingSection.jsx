import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from '../../components/Cards/PricingCard/Card';
import FirstCard from '../../components/Cards/PricingCard/FirstCard';
import '../PricingSection/PricingSection.css';

export default function PricingContainer(props) {
  return (
    <MDBContainer>
      <MDBRow className="donate__row">
        <FirstCard btntext="Contacto" />
      </MDBRow>
      <MDBRow className="donate__row">
        <MDBCol>
          <Card btntext="$50" mp="https://mpago.la/32DJ4m1" />
        </MDBCol>
        <MDBCol>
          <Card btntext="$100" mp="https://mpago.la/15gc4bA" />
        </MDBCol>
        <MDBCol>
          <Card btntext="$200" mp="https://mpago.la/22kLRso" />
        </MDBCol>
      </MDBRow>
      <MDBRow className="donate__row">
        <MDBCol>
          <Card btntext="$500" mp="https://mpago.la/2mGy2ra" />
        </MDBCol>
        <MDBCol>
          <Card btntext="$1000" mp="https://mpago.la/15Yqp8p" />
        </MDBCol>
        <MDBCol>
          <Card btntext="$2000" mp="https://mpago.la/1C3HLGY" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
