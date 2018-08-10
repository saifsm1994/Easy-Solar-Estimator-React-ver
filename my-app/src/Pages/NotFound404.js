import React, { Component } from 'react';
import '../App.css';
import Header1 from '../components/Header';
import Navbar1 from '../components/Navbar';
// eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';
import AppHome from '../components/AppHome';
import Footer1 from '../components/Footer';





class NotFound404 extends Component {

  render() {
    return (
      <div className="App">
      <Row>
        <Col xl="12">
          <Navbar1 />
        </Col>
      </Row>

      <h1>404: Page Not Found.</h1>
      <Footer1 />

      
      
      </div>
    );
  }

}


export default NotFound404;
