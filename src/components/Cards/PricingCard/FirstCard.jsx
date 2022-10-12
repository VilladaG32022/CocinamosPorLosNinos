import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';


import { PricingSec } from '../../../utils/constants';



export default function App(props) {
  const { btntext} = props;
  return (
    <div>
        {PricingSec.map((label) => (
        <MDBCard className='donate__card'>
          <MDBCardHeader className='donate__header'>
            <MDBCardTitle className="donate__title">{label.title}</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText className="donate__text">{label.text}</MDBCardText>
          </MDBCardBody>
            <div className="donate__contact" >
              <h2 className='contact__title'>CONTACTATE CON NOSOTROS <MDBIcon fas icon="caret-down" className="me-3 contact__icon" /></h2>
              <p className='contact__option'>
                <MDBIcon icon="phone" className="me-3"/>
                + 351 621 9319
              </p> 
              <p className='contact__option'>
                <MDBIcon fas icon="envelope" className="me-3"/>
                cocinamosporlosniños@gmail.com
              </p>
              <p className='contact__option'>
                <MDBIcon fas icon="home" className="me-3"/>
                Coronel Juan Beverina 2068
              </p>
              <p className='contact__option'>
                <MDBIcon fas icon="home" className="me-3"/>
                Barrio Jardin Claret M24 LTE 4
              </p>
            </div>
        </MDBCard>
        ))}
    </div>
  );
}
