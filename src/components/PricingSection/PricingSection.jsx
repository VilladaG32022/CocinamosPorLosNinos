import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from '../../components/Cards/PricingCard/Card';
import FirstCard from '../../components/Cards/PricingCard/FirstCard';
import '../PricingSection/PricingSection.css';

export default function PricingContainer(props) {
  return (
    <div>
      <MDBContainer className='pricing__container'>
        <MDBRow>
            <FirstCard btntext="CONTACTO" />
        </MDBRow>
      </MDBContainer>
      <MDBContainer className='pricing__container'>
        <MDBRow>
          <MDBCol>
            <Card btntext="$50" />
          </MDBCol>
          <MDBCol>
            <Card btntext="$100" />
          </MDBCol>
          <MDBCol>
            <Card btntext="$200" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <Card btntext="$500" />
          </MDBCol>
          <MDBCol>
            <Card btntext="$1000" />
          </MDBCol>
          <MDBCol>
            <Card btntext="$2000" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
