import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Card from "../../components/Cards/PricingCard/Card";
import "../PricingSection/PricingSection.css";

export default function PricingContainer(props) {
  return (
    <MDBContainer>
      <MDBRow className="donate__row">
        <MDBCol>
          <Card
            title="Dona"
            text="El dinero que aportan por donaciones llega a un fondo común que nos permitirá comprar utensilios, alimentos, descartables y ayudar a refaccionar lugares que alojan a niños que necesitan alimentarse. "
            btntext=" Ir a MercadoPago"
          />
        </MDBCol>
        <MDBCol>
          <Card
            title="Dona"
            text="las donaciones se pueden entregar en puntos de la ciudad en caso de querer entregarlas personalmente o las podemos pasar a buscar a través de alguno de nuestros voluntarios que se encarga de dicha tarea."
            btntext=" Ir a MercadoPago"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
