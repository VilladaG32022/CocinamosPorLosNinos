import React from "react";
import ActiveStateButton from "../ActiveStateButtons/Activestatebutton";

import { HomeSec } from "../../utils/constants";

import "../HomeSection/HomeSection.css";
export default function HomeSection() {
  return (
    <>
      <section className="home" id="home_section">
        <div className="home__container grid">
          <div className="home__data">
            <h1 className="home__title">{HomeSec.title}</h1>
            <h1 className="home__title__bold">{HomeSec.subtitle}</h1>
            <p className="home__description">{HomeSec.text}</p>
            <div className="home__btns">
              <ActiveStateButton />
            </div>
          </div>
        </div>
      </section>
      <div className="separator"></div>
    </>
  );
}
