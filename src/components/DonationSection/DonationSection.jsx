import React from "react";
import "../DonationSection/DonationSection.css";
import Button from "react-bootstrap/Button";

import { DonateSec } from "../../utils/constants";
export default function HomeSection() {
  return (
    <>
      <section className="donation" id="donation_section">
        <div className="don__separator"></div>
        <div className="donation__container">
          <div className="donation__data">
            <h1 className="donation__title__bold">{DonateSec.title}</h1>
            <p className="donation__description">{DonateSec.text}</p>
            <Button
              className="donation__btn"
              variant="primary"
              href="/Donar"
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
