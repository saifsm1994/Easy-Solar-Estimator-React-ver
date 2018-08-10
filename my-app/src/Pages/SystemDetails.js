import React, { Component } from 'react';
import '../App.css';
import Header1 from '../components/Header';
import Navbar1 from '../components/Navbar';
// eslint-disable-next-line
import { Container, Row, Col, Jumbotron, ListGroup, ListGroupItem} from 'reactstrap';
import AppHome from '../components/AppHome';
import Footer1 from '../components/Footer';





const SystemDetails =() => {

    return (
      <div>
      <Row>
        <Col xl="12">
          <Navbar1 />
        </Col>
      </Row>

      <Container className="App">
      <Row>
      <Col xl={{size: 8, offset: 2}} lg={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} >
      <br/>
      <Jumbotron>
        <h1>About</h1>  
        <p>This page details the solar system used to come up with our output estimation, as well as how the estimator arrived at the given value</p>
        </Jumbotron>
      </Col>
      </Row>
      <Row>
      <Col xl={{size: 4, offset: 2}} lg={{size: 5, offset: 1}} sm={{size: 12, offset: 0}}>

      <Jumbotron>
      <h3>Solar Panel Used</h3>
      <ListGroup className="listGroupStyle">
        <ListGroupItem> <a href="https://www.canadiansolar.com/fileadmin/user_upload/downloads/datasheets/v5.531/na/canadian_solar-datasheet-maxpower-CS6U-M-v5.531P1na.pdf">
        Panel: Canadian Solar CS6U - 330M Panel</a></ListGroupItem>
        <ListGroupItem>Power: 330W</ListGroupItem>
        <ListGroupItem>Dimensions: 1960 x 992 x 40 mm (77.2 x 39.1 x 1.57 in)</ListGroupItem>
        <ListGroupItem>Efficiency: 16.97%</ListGroupItem>
        <ListGroupItem>Degredation rate: 0.5% per year</ListGroupItem>
        <ListGroupItem ><a href="https://www.amazon.com/ECO-WORTHY-1200W-Monocrystalline-Solar-Panel/dp/B011918YV0/ref=sr_1_8?s=lawn-garden&ie=UTF8&qid=1509417102&sr=1-8&keywords=Grid+Tie&refinements=p_36%3A60000-99999999">
        Lower Cost Panel:</a> $1.54/Watt</ListGroupItem>
        <ListGroupItem><a href="https://www.nrel.gov/docs/fy17osti/68925.pdf">
        High Cost Panel:</a> $3.22/Watt [Avg Q1 2017 cost]</ListGroupItem>
      </ListGroup>  
      </Jumbotron>
      </Col>

      <Col xl={{size: 4, offset: 0}} lg={{size: 5, offset: 0}} sm={{size: 12, offset: 0}}>
      <Jumbotron>
      <h3>Power Formula</h3>
      <ListGroup className="listGroupStyle">
        <ListGroupItem> <a href="http://photovoltaic-software.com/PV-solar-energy-calculation.php">
        Formula: E = A * r * H * PR</a></ListGroupItem>
        <ListGroupItem>E: Energy Output from the panel in kWh</ListGroupItem>
        <ListGroupItem>A: panel's surface area </ListGroupItem>
        <ListGroupItem>r: efficiency of the panel == max output/area </ListGroupItem>
        <ListGroupItem>PR: performance ratio - used to account for general losses. Set to 80%. Can range from 50-90%</ListGroupItem>
      </ListGroup>  
      </Jumbotron>
     </Col>

     <Col xl={{size: 8, offset: 2}} lg={{size: 10, offset: 1}} sm={{size: 12, offset: 0}}>
     <Jumbotron>
     <h3>Assumptions</h3>
     <ListGroup className="listGroupStyle">
     <ListGroupItem>1. That the panels are kept clear of debris and operational at all times</ListGroupItem>      
     <ListGroupItem>2. That the temperature range and other extraneous factors and potential sources of efficiency loss can be acounted for by our PR of 80%</ListGroupItem>
     <ListGroupItem>3. We assume that the panel is operating under standard test conditions, and conditions are within manufacturer guidlines. Wind or temperature deviations outside standard testing conditions may affect panel output.</ListGroupItem>      
     <ListGroupItem>4. That the panel is perfectly horizontal. (Tilting the panel may improve performance based on geolocation)</ListGroupItem>
     <ListGroupItem>5. The system being modeled is an on-grid system and as such we do not account for battery or power storage costs.
     </ListGroupItem>      
     </ListGroup>  
     </Jumbotron>
    </Col>



     </Row>
      <Footer1 />
      </Container>
      </div>
    );
  

}


export default SystemDetails;
