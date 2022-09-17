import React from "react";
import Button from "react-bootstrap/Button";
import "../ActiveStateButtons/activestatebutton.css";

export default function ActiveStateButton() {
  return (
    <div>
      <Button className="primary" href="#about_section">
        Sobre Nosotros
      </Button>
      <Button className="secondary" href="/volunteer">
        UNITE
      </Button>
    </div>
  );
}
