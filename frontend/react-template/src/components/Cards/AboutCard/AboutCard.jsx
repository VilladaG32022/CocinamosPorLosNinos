import React from "react";
import '../AboutCard/AboutCard.css'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardOverlay,MDBCardImage} from 'mdb-react-ui-kit';

import { AboutSec} from "../../../utils/constants";

export default function AboutCard(){

  return(
    <MDBCard background='dark' className='text-white'>

      {AboutSec.map(i => (
        <>
     <MDBCardImage className="CardImage" overlay src={i.scr} alt='...' />
      <MDBCardOverlay>
        <div className="about__middle">
          <MDBCardTitle className="about__card__title">{i.title}</MDBCardTitle>
          <MDBCardText className="about__card__text">
            {i.text}
          </MDBCardText>
        </div>
      </MDBCardOverlay>

        </>
      ))}
    </MDBCard>
    );
}
