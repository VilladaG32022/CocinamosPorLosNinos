import React from 'react';
import '../AboutCard/AboutCard.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardOverlay } from 'mdb-react-ui-kit';

import { AboutSec } from '../../../utils/constants';

export default function AboutCard() {
  return (
    <>
      {AboutSec.map((label) => (
        <div>
          <MDBCard className='about__card'>
            <div className="about__card__container">
              <MDBCardImage className="about__card__image" src={label.src} alt="..." />
              <div className="about__card__content">
                <MDBCardOverlay className="about__card__overlay">
                  <MDBCardTitle className="about__card__title">{label.title}</MDBCardTitle>
                  <MDBCardText className="about__card__text">{label.text}</MDBCardText>
                </MDBCardOverlay>
              </div>
            </div>
          </div>
        </MDBCard>
      ))}
    </>
  );
}
