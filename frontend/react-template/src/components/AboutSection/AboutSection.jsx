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
          <AboutCard
            title="Somos CPLN"
            text="  Nos organizamos para poder cubrir la cuota básica de alimentación de muchos niños en diferentes zonas a través de comedores, centros vecinales, organizaciones y fundaciones. 
                                Nos unimos familias con ganas de ayudarnos a ayudar.
                                Nuestro organigrama y roles está dividido en: Familias de voluntariado, Voluntarios de cocina, Voluntarios de gestión y donantes."
            scr={
              "https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"
            }
          />
        </div>
        <div className="box">
          <AboutCard
            title="Que hacemos"
            text="Desarrollamos Menús que podemos cocinar en diferentes casas de las familias participantes. Se determina una célula de trabajo la que se organiza según necesidad y disponibilidad de los integrantes. 
                        Cada menú tiene un desarrollo de receta, ingredientes y cocción para luego sistematizar el embalaje y envío al destino. 
                        Cada uno de los menús tiene aportes de carnes y vegetales para cubrir una dieta lo mas completa posible en cada entrega."
            scr={
              "https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"
            }
          />
        </div>
        <div className="box">
          <AboutCard
            title="Servicios"
            text="Toda nuestra comunidad de familias colabora y brinda sus servicios para que se logren los objetivos de la organización entre los que contamos: 

                        Apoyo alimentario a niños de diferentes zonas de Córdoba. 
                        Ayuda en reparación o refuncionalización de comedores. 
                        Entrega de elementos para poder alimentar a los niños. 
                        Generación de charlas informativas a familias e integrantes del equipo. 
                        Charlas informativas a organizadores comunitarios de comedores, clubres capillas, etc. 
                        "
            scr={
              "https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"
            }
          />
        </div>
        <div className="box">
          <AboutCard
            title="Contacto"
            text="Tu interés nos hace más fuertes y nos ayudará a que muchos chicos crezcan y se desarrollen. 
                                Esperamos tu consulta."
            scr={
              "https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"
            }
          />
        </div>
      </div>
    </>
  );
}
