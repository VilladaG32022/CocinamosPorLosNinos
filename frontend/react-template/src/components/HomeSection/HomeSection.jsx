import React from "react";
import "../HomeSection/HomeSection.css";
import ActiveStateButton from "../ActiveStateButtons/Activestatebutton";
export default function HomeSection() {
  return (
    <>
      <section className="home" id="home_section">
        <div className="home__container grid">
          <div className="home__data">
            <h1 className="home__title">COCINAMOS</h1>
            <h1 className="home__title__bold">POR LOS NIÑOS</h1>
            <p className="home__description">
              Somos familias que nos unimos para ayudar a niños con dificultades
              para alimentarse. Formamos células de trabajo para poder dividir
              todas las tareas que realizamos y cumplir el objetivo principal:
              ayudar a familias que no pueden alimentar a a sus hijos.
            </p>
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
