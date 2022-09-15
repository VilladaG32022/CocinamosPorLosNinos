import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import DailyCard from "../Cards/DailyCard/DailyCards";
import "../Carousel/ControlledCarousel.css";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:3000";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />
      }
      nextIcon={
        <span aria-hidden="true" className="carousel-control-next-icon" />
      }
      className="carousel"
      activeIndex={index}
      onSelect={handleSelect}
      id="news_section"
    >
      <Carousel.Item>
        <div className="cardcontainer">
          <DailyCard
            title="Bienvenidos"
            text="Primer testeo"
            scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDCIdwWQjtV1aCrP5-C1nti01H31nfvxh84E2tMhZMl0Y39e43zBIZ6VKkl2JqObd1Lk&usqp=CAU"
          />
          <DailyCard
            title="Bienvenidos"
            text="Primer testeo"
            scr="https://as1.ftcdn.net/v2/jpg/04/93/31/44/1000_F_493314442_xWafSe80D8UAjJDkbK4D3Ltp83uIbpJ5.jpg"
          />
          <DailyCard
            title="Estamos en Linea"
            text="Creamos nuestra pagina web"
            scr="https://as2.ftcdn.net/v2/jpg/04/94/51/03/1000_F_494510383_f1LN430KdkkjS9cP2wd1xTLfWvLre9lY.jpg"
          />
          <DailyCard
            title="Nos Fuimos al Mundial"
            text="Clasificamos al Mundial 2022"
            scr="https://as1.ftcdn.net/v2/jpg/03/93/15/28/1000_F_393152893_YQdIpeUydsLRxL62IgZ2INnAutIEnR1B.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cardcontainer">
          <DailyCard
            title="Hola"
            text="Segundo testeo"
            scr="https://as1.ftcdn.net/v2/jpg/04/40/81/58/1000_F_440815807_DrdWGcZdLIY8FB5xhK9LJ64ahcJB5uzM.jpg"
          />
          <DailyCard
            title="Nueva Cancion"
            text="El Duki Saco nuevo tema llamado givenchy"
            scr="https://i.ytimg.com/vi/ymvYySd_P2E/maxresdefault.jpg"
          />
          <DailyCard
            title="Llegamos a Tierra del Fuego"
            text="Expandimos nuestros horizontes hacia nuevas provincias"
            scr="https://as2.ftcdn.net/v2/jpg/03/83/86/33/1000_F_383863377_D07Ddv0zQPCrAFEEOzJWeiQEvVOo7x3A.jpg"
          />
          <DailyCard
            title="Una Lastima"
            text="Somos ediondos jugando al tenis a nivel profesional"
            scr="https://as2.ftcdn.net/v2/jpg/03/79/01/73/1000_F_379017328_aGQqDf87c6Stam4NPgPFsOgnD6mzwfeM.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cardcontainer">
          <DailyCard
            title="Nos Fuimos al Mundial"
            text="Clasificamos al Mundial 2022"
            scr="https://i.pinimg.com/236x/57/a9/be/57a9be54e507692f0c60ce25c435730e.jpg"
          />
          <DailyCard
            title="Bienvenidos"
            text="Primer testeo"
            scr="http://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2018/08/27/15354017053819.jpg"
          />
          <DailyCard
            title="Bienvenidos"
            text="Primer testeo"
            scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDCIdwWQjtV1aCrP5-C1nti01H31nfvxh84E2tMhZMl0Y39e43zBIZ6VKkl2JqObd1Lk&usqp=CAU"
          />
          <DailyCard
            title="Estamos en Linea"
            text="Creamos nuestra pagina web"
            scr="https://elonce-media.elonce.com/fotos-super/2014/11/08/n_1415496905.jpg"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
