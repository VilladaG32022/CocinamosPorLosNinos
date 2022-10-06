import React from "react";
import Row from "react-bootstrap/Row";


export default function FormLayout(props) {
  console.log(props);

  const { children } = props;

  return (
    <>

      <Row>{children}</Row>

    </>
  );
}
