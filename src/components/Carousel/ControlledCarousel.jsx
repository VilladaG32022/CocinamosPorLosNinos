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

  const nodePairs = cardList.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 3));
    return result;
  }, []);

  return (
    <div id="news_section">
      <h1 className="daily__title" id="daily_section">
        Novedades
      </h1>
        <Carousel className="carousel__container" activeIndex={index} onSelect={handleSelect}>
          {nodePairs.map((pair) => (
            <Carousel.Item>
              {pair.map((card) => (
                <div className='carousel__item'>
                <DailyCard card={card} />
                </div>
              ))}
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
