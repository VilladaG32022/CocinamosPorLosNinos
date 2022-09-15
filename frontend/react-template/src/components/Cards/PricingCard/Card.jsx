import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBIcon } from "mdb-react-ui-kit";
import Button from "@mui/material/Button";

import { PricingSec } from "../../../utils/constants";

export default function App(props) {
  const { btntext } = props;
  return (
    <MDBCard>
      <div className="donate__header">
        {PricingSec.map((i) => (
          <div>
            <MDBCardTitle className="donate__title">
              {i.title ? i.title : "Dona"}
            </MDBCardTitle>
            <div className="donate__div">
              <MDBCardText className="donate__text">{i.text}</MDBCardText>
              <Button variant="contained">
                {btntext}
                <MDBIcon fas icon="credit-card" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </MDBCard>
  );
}
