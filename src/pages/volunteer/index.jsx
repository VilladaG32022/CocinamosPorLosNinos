import {React, useEffect} from "react";
import Form from "../../components/Forms/Form";

import "../volunteer/style.css";

export default function Volunteer() {

  useEffect(() => {
    console.log('index initialized');
  });

  return (
    <div className="Container">
      <Form/>
    </div>
  );
}