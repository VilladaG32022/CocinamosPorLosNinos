import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader } from 'mdb-react-ui-kit';


import { PricingSec } from '../../../utils/constants';



export default function App(props) {
  return (
    <div>
        {PricingSec.map((label) => (
        <MDBCard className='donate__card'>
        <MDBCardHeader className='donate__header'>
            <MDBCardTitle className="donate__title">{label.title}</MDBCardTitle>
        </MDBCardHeader>
            <MDBCardText className="donate__text">{label.text}</MDBCardText>
        </MDBCard>
        ))}
    </div>
  );
}
