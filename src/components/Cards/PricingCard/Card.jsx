import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBIcon } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';

import { PricingSec } from '../../../utils/constants';

export default function App(props) {
  const { btntext } = props;
  return (
    <MDBCard>
      <div className="donate__header">
        {PricingSec.map((label) => (
          <div>
            <MDBCardTitle className="donate__title">{label.title ? label.title : 'Dona'}</MDBCardTitle>
            <div className="donate__div">
              <MDBCardText className="donate__text">{label.text}</MDBCardText>
              <Button variant="contained">
                {btntext}
                <MDBIcon fas icon="credit-card" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </MDBCard>
  );
}
