import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';

import { PricingSec } from '../../../utils/constants';

export default function App(props) {
  const { btntext } = props;
  return (
    <div>
      {PricingSec.map((label) => (
        <MDBCard className="donate__card">
          <MDBCardHeader className="donate__header">
            <MDBCardTitle className="donate__title">{label.title}</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardText className="donate__text">{label.text}</MDBCardText>
          <Button className="donate__button">{btntext}</Button>
        </MDBCard>
      ))}
    </div>
  );
}
