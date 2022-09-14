import React from "react";
import AboutCard from "../Cards/AboutCard/AboutCard";
import '../AboutSection/AboutSection.css'

export default function AboutSection(){
    return(
        <>
            <h1 className="about__title" id="about_section">Sobre nosotros</h1>
            <div grid className="AboutCard__container"> 
                <div className="box">
                    <AboutCard 
                        scr={"https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"}
                    />
                </div>
            </div>
        </>
    );
}