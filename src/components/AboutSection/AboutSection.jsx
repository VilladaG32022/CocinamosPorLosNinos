import React from "react";
import AboutCard from "../Cards/AboutCard/AboutCard";
import "../AboutSection/AboutSection.css";

export default function AboutSection() {
  return (
    <>
      <h1 className="about__title" id="about_section">
        Sobre nosotros
      </h1>
      <div grid className="AboutCard__container">
        <div className="box">
          <AboutCard />
        </div>
      </div>
    </>
  );
}
