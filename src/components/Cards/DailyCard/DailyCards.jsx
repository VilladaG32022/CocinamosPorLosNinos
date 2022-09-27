import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import '../DailyCard/DailyCards.css';

export default function DailyCard(props) {
  const { title, card } = props;
  const [modalShow, setModalShow] = React.useState(false);
console.log(props)
  return (

    <Card className="daily__card" style={{ width: '30rem' }}>
      <Card.Img className="card__img" src={card.img} alt='img no encontrada' />
      <div className="card__separator"></div>
      <Card.Body className="card__body">
        <Card.Text className="card__text">{card.description}</Card.Text>
        <Button className="card__btn" onClick={()=> setModalShow(true)}>
          Seguir leyendo
        </Button>

        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  );

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Card.Img className="modal__img" src={card.img} alt='img no encontrada' />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className="modal__title" id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
          <p className="modal__text">{card.description}</p>
        </Modal.Body>
        <div className="modal__separator"></div>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
