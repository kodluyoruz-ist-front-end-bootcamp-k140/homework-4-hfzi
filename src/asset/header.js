import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Card
} from "react-router-dom";
//import image from 'https://picsum.photos/200/300'

const grsl = {
  backgroundColor:"#e1e1e1",
  textAlign:"Center",
  margin: "5px",
  padding: "10px",
  borderRadius: "3px"
}

const menu = {
  backgroundColor: "#e1e1e1",
  textAlign:"Center",
  margin: "5px",
  //padding: "5px",
  borderRadius: "3px",
  width: "100%"
}

//const resim = `https://picsum.photos/200/300`;

function Navbarim() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/" >İngilizce Makaleler</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/beginner" href="#a1">[Beginner]</Nav.Link>
              <Nav.Link as={Link} to="/intermediate" href="#b1">[Intermediate]</Nav.Link>
              <Nav.Link as={Link} to="/advanced" href="#c2">[Advanced]</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Route path="/beginner" component={a1} />
        <Route path="/intermediate" component={b1} />
        <Route path="/advanced" component={c1} />
      </div>
    </Router>
  );
}

function a1() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={grsl}>A1</Col>
          <Col style={grsl}>A2</Col>
        </Row>
        <Row>
          <Col style={menu}> <img src={'https://i.picsum.photos/id/510/300/200.jpg?hmac=b8fG9GxqHHCM9vW7Z2k3s_-tMk7ULuCFnUefY9RXgo8'}/> 1 of 3</Col>
          <Col style={menu}>2 of 3</Col>
          <Col style={menu}>3 of 3</Col>
          <Col style={menu}>1 of 3</Col>
        </Row>
        <Row>
          <Col style={menu}>1 of 3</Col>
          <Col style={menu}>2 of 3</Col>
          <Col style={menu}>3 of 3</Col>
          <Col style={menu}>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

function b1() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={grsl}>B1</Col>
          <Col style={grsl}>B2</Col>
        </Row>
        <Row >
          <Col style={grsl}>1 of 3</Col>
          <Col style={grsl}>2 of 3</Col>
          <Col style={grsl}>3 of 3</Col>
          <Col style={grsl}>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

function c1() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={grsl}>C1</Col>
          <Col style={grsl}>C2</Col>
        </Row>
        <Row >
          <Col style={grsl}>1 of 3</Col>
          <Col style={grsl}>2 of 3</Col>
          <Col style={grsl}>3 of 3</Col>
          <Col style={grsl}>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbarim;
