import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardOverlay,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App(props) {
  const { title, text, btntext } = props;
  return (
    <MDBCard>
      <MDBCardOverlay>
        <div className="donate__header">
          <MDBCardTitle className="donate__title">{title}</MDBCardTitle>
        </div>
        <div className="donate__div">
          <MDBCardText className="donate__text">{text}</MDBCardText>
          <MDBBtn className="donate__button">
            {btntext}
            <MDBIcon className="donate__icon" fas icon="credit-card" />
          </MDBBtn>
        </div>
      </MDBCardOverlay>
    </MDBCard>
  );
}
