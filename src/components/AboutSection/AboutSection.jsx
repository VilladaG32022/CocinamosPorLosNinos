import React from 'react';
import AboutCard from '../Cards/AboutCard/AboutCard';
import '../AboutSection/AboutSection.css';

export default function AboutSection() {
  return (
    <div>
      <h1 className="about__title" id="about">
        Sobre nosotros
      </h1>
      <div className="about__container">
        <AboutCard />
      </div>
    </div>
  );
}
