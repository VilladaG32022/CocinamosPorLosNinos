import React from 'react';
import Button from 'react-bootstrap/Button';

import '../DonationSection/DonationSection.css';

import { DonateSec, links, btns } from '../../utils/constants';

export default function HomeSection() {
  return (
    <div>
      <section className="donation" id="donacion">
        <div className="don__separator"></div>
        <div className="donation__container">
          <div className="donation__data">
            <h1 className="donation__title__bold">{DonateSec.title}</h1>
            <p className="donation__description">{DonateSec.text}</p>
            <Button className="donation__btn" variant="primary" href={links.DONATE}>
              {btns.donar}
            </Button>
          </div>
        </div>
        <div className="separator"></div>
      </section>
    </div>
  );
}
