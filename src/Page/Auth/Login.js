import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container style={{ minHeight: "670px", width: "33%" }} className="font">
      <Row className="d-flex py-5 justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <Form className="align-items-center text-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>تسجيل الدخول</Form.Label>
              <Form.Control type="email" placeholder="الاميل" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="كلمة السر" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" type="submit">
              تسجيل الدخول
            </Button>
          </Form>
          <div className="d-flex mt-3 justify-content-center">
            <p>ليس لديك حساب؟</p>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="text-danger" style={{ cursor: "pointer" }}>
                اضغط هنا
              </span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
