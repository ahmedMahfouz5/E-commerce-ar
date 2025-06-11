//import logo from "../../images/5.jpg";
import {
  Container,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";

function NavBarLogin() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      variant="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">تسوق </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="align-items-center">
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "auto", marginLeft: "1rem", marginRight: "1rem" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            /* navbarScroll */
          >
            <Nav.Link href="/login">دخول</Nav.Link>
            <Nav.Link href="/cart">العربه</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarLogin;
