import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import DailyCard from '../Cards/DailyCard/DailyCards';
import '../Carousel/ControlledCarousel.css';


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    Axios.get("https://deploy-hernan.herokuapp.com/Notices/Get/")

      .then((response) => {
        setCardList(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="about__title" id="about_section">
        Novedades
      </h1>
      <Carousel
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
        id="news_section"
      >
        <Carousel.Item>
          <div className="card__container">

          {cardList && cardList.map(card =>(

            <DailyCard card={card} />
          ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
