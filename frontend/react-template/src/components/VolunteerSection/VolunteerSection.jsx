import React from "react";
import "../VolunteerSection/VolunteerSection.css";
import Button from "react-bootstrap/Button";
export default function VolunteerSection() {
  return (
    <>
      <section className="volunteer" id="volunteer_section">
        <div className="separator"></div>
        <div className="volunteer__container">
          <div className="volunteer__data">
            <h1 className="volunteer__title__bold">Voluntariado</h1>
            <p className="volunteer__description">
              Ayudamos porque sabemos el porqué ayudamos y a quienes ayudamos.
              Cada integrante de este grupo de familias es consciente y sabe
              cuando se está ayudando a las infancias de una zona o con alguna
              problemática en particular. Partimos de lo básico, el alimento que
              le permitirá a esos niños adquirir y retener conocimientos y poder
              desarrollarse físicamente.
            </p>
            <Button
              className="volunteer__btn"
              href="/volunteer"
              variant="primary"
            >
              INSCRIBITE!
            </Button>
          </div>
          11
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
}
