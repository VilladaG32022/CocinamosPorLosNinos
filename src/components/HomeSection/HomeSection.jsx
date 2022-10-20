import React from 'react';
import ActiveStateButton from '../ActiveStateButtons/Activestatebutton';
import logo_cuenco_favicon from '../../assets/Img/favicon/android-chrome-192x192.png';


import { HomeSec } from '../../utils/constants';

import '../HomeSection/HomeSection.css';
export default function HomeSection() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container grid">
          <div className="home__data">
            <div className='home__top'>
              <img src={logo_cuenco_favicon} className="home__logo" alt="logo" />
              <div className='home__title__div'>
                <h1 className="home__title">{HomeSec.title}</h1>
                <h1 className="home__title__bold">{HomeSec.subtitle}</h1>
              </div>
            </div>
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
