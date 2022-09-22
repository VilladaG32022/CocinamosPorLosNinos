import React from 'react';
import Button from 'react-bootstrap/Button';
import '../ActiveStateButtons/activestatebutton.css';

import { btns } from '../../utils/constants';
export default function ActiveStateButton() {
  return (
    <div>
      <Button className="primary" href="/#donacion">
        {btns.donar}
      </Button>
      <Button className="secondary" href="/#voluntariado">
        {btns.unir}
      </Button>
    </div>
  );
}
