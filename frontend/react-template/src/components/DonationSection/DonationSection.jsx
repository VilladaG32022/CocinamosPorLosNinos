import React from "react";
import "../DonationSection/DonationSection.css";
import Button from "react-bootstrap/Button";
export default function HomeSection() {
  return (
    <>
      <section className="donation" id="donation_section">
        <div className="don__separator"></div>
        <div className="donation__container">
          <div className="donation__data">
            <h1 className="donation__title__bold">Donaciones</h1>
            <p className="donation__description">
              Sabemos que es difícil comprometerse con el voluntariado porque
              existe mucho descreimiento y desconfianza. Por eso nos unimos
              familias que sólo quieren aportar un poquito que realmente es
              muchísimo . Tu donación por más chica que sea nos brindará primero
              apoyo de saber que estamos por un buen camino y luego seguramente
              un niño más podrá alimentarse. Las donaciones no son obligatorias
              ni asumen ningún compromiso futuro, seguro que siempre estaremos
              esperando una próxima vez, para revalidar de parte tuya que estás
              de acuerdo en este camino que emprendemos de ahora en más juntos.
            </p>
            <Button
              className="donation__btn"
              href="/donation"
              variant="primary"
            >
              DONA!
            </Button>
          </div>
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
}
