import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../DailyCard/DailyCards.css";

export default function DailyCard(props) {
  const { title, text, scr } = props;

  return (
    <Card className="card" style={{ width: "30rem" }}>
      <Card.Img className="card__img" src={scr} />
      <div className="card__separator"></div>
      <Card.Body className="card__body">
        <Card.Title className="card__title">{title}</Card.Title>
        <Card.Text className="card__text">{text}</Card.Text>
        <Button className="card__btn">Seguir leyendo</Button>
      </Card.Body>
    </Card>
  );
}
