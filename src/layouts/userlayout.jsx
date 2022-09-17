import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../components/SideBar/SideBar";

export default function UserLayout(props) {
  console.log(props);

  const { children } = props;

  return (
    <>
      <Col>
        <SideBar />
      </Col>
      <Row>
        <Col>{children}</Col>
      </Row>
    </>
  );
}
