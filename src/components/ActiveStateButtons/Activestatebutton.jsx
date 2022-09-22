import React from "react";
import Button from "react-bootstrap/Button";
import "../ActiveStateButtons/activestatebutton.css";

export default function ActiveStateButton() {
  return (
    <div>
      <Button className="primary" href="#donation_section">
        DONÁ!
      </Button>
      <Button className="secondary">
        UNITE!
      </Button>
    </div>
  );
}
