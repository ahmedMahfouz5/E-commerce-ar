import { Container, Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex justify-content-between">
          <div className="d-flex">
            <div> الشروط والاحكام</div>
            <div> سياسة الخصوصيه</div>
            <div>اتصل بنا</div>
          </div>
          <div>
            <div>تليفوان 010 123 4567</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
