import React from 'react';
import '../VolunteerSection/VolunteerSection.css';
import Button from 'react-bootstrap/Button';

import { VolunteerSec, links, btns } from '../../utils/constants';

export default function VolunteerSection() {
  return (
    <>
      <section className="volunteer" id="voluntariado">
        <div className="volunteer__container">
          <div className="volunteer__data">
            <h1 className="volunteer__title__bold">{VolunteerSec.title}</h1>
            <p className="volunteer__description">{VolunteerSec.text}</p>
            <Button className="volunteer__btn" href={links.VOLUNTEER} variant="primary">
              {btns.inscribir}
            </Button>
          </div>
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
}
