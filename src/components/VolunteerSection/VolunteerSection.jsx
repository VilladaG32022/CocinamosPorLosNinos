import React from "react";
import "../VolunteerSection/VolunteerSection.css";
import Button from "react-bootstrap/Button";

import { VolunteerSec, links } from "../../utils/constants";

export default function VolunteerSection() {
  return (
    <>
      <section className="volunteer" id="volunteer_section">
        <div className="separator"></div>
        <div className="volunteer__container">
          <div className="volunteer__data">
            <h1 className="volunteer__title__bold">{VolunteerSec.title}</h1>
            <p className="volunteer__description">{VolunteerSec.text}</p>
            <Button
              className="volunteer__btn"
              variant="primary"
            >
              INSCRIBITE!
            </Button>
          </div>
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
}
