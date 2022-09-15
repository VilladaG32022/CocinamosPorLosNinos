import React from "react";
import NavScroll from "../components/Navbar/BasicNavbar";
import FooterSection from "../components/Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Layout(props) {
  console.log(props);

  const { children } = props;

  return (
    <>
      <Row>
        <Col>
          <NavScroll />
        </Col>
      </Row>
      <Row>{children}</Row>
      <Row>
        <FooterSection />
      </Row>
    </>
  );
}
