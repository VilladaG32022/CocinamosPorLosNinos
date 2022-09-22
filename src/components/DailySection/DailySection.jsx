import React from 'react';
import '../DailySection/DailySection.css';
import ControlledCarousel from '../Carousel/ControlledCarousel';

export default function DailySection() {
  return (
    <section className="section" id="novedades">
      <ControlledCarousel />;
    </section>
  );
}
