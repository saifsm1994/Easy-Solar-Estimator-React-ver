import React, { Component } from 'react'; // eslint-disable-line
import { Container, Row, Col } from 'reactstrap'; // eslint-disable-line
import Cards from './Cards';
import LargeCard from './LargeCard';



class AppHome extends React.Component {
  constructor(props) { // eslint-disable-line
    super(props);
  }

  render() {
    return (
     <Row>
        <Col lg={{size:9, offset: 2}} xl={{size:9, offset: 2}} md={{size:9, offset: 2}} sm={{size:9, offset: 2}} xs={{size:12, offset: 0}} >
          <Row> 
          <Cards dataObjSmallCard = {this.props.dataObjSmallCard} />          
          <LargeCard dataObjLargeCard = {this.props.dataObjLargeCard} />          
          </Row>
        </Col>
      </Row>
    
    );
  }



}

export default AppHome;
