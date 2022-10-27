import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DailyCard from '../Cards/DailyCard/DailyCards';
import '../Carousel/ControlledCarousel.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    Axios.get('https://deploy-hernan.herokuapp.com/Notices/Get/')

      .then((response) => {
        setCardList(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="news_section">
      <h1 className="about__title" id="about_section">
        Novedades
      </h1> 
        <Carousel index={2} activeIndex={index} onSelect={handleSelect}>
          {cardList.map((card) => (
            <Carousel.Item className='carousel__items'>
              <DailyCard card={card}/>
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
  );
}
