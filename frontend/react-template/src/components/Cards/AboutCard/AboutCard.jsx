import React from "react";
import "../AboutCard/AboutCard.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function AboutCard(props) {
  const { title, text, scr } = props;

  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage className="CardImage" overlay src={scr} alt="..." />
      <MDBCardOverlay>
        <div className="about__middle">
          <MDBCardTitle className="about__card__title">{title}</MDBCardTitle>
          <MDBCardText className="about__card__text">{text}</MDBCardText>
        </div>
      </MDBCardOverlay>
    </MDBCard>
  );
}
