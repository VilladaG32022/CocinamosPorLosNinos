import React from "react";
import "../AboutCard/AboutCard.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import { AboutSec } from "../../../utils/constants";

export default function AboutCard() {
  return (
    <MDBCard background="dark" className="text-white">
      {AboutSec.map((label) => (
        <>
          <MDBCard>
            <div className="container">
              <MDBCardImage className="CardImage" src={label.src} alt="..." />
              <div className="about__middle">
                <MDBCardTitle className="about__card__title">
                  {label.title}
                </MDBCardTitle>
                <MDBCardText className="about__card__text">
                  {label.text}
                </MDBCardText>
              </div>
            </div>
          </MDBCard>
        </>
      ))}
    </MDBCard>
  );
}
