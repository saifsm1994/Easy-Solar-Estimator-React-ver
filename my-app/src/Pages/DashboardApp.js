import React, { Component } from 'react';
import '../App.css';
import Header1 from '../components/Header';
import Navbar1 from '../components/Navbar';
// eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';
import getLocation from '../Functionality/getLocation';
import getSolar from '../Functionality/getSolar';
import AppHome from '../components/AppHome';
// import MonthlyTable from './components/MonthlyTable';
import Footer1 from '../components/Footer';


// eslint-disable-next-line
// const dataMonth=[ "Jan"]; const dataTitle=[ "apper" ];
// eslint-disable-next-line



class DashboardApp extends Component {
  state = {
    dataObjSmallCard : [],
    dataObjLargeCard: [],
    dataObjMonthly: [],
    called: false,
    called2: false
  };

  render() {
    return (
      <div className="App">
      <Row>
        <Col xl="12">
          <Navbar1 />
          <Header1 />
        </Col>
      </Row>

      <Container className="AppContainer">

      {!this.state.called && this.getLocationer()}

      <AppHome dataObjLargeCard={this.state.dataObjLargeCard} dataObjSmallCard={this.state.dataObjSmallCard} />

      <Footer1 />

      
      </Container>
      </div>
    );
  }


  getLocationer = () => {
    let loca =  getLocation(this.getSolarCall);
    if(loca && this.state.called === false){
       this.setState((prevState) => ({
        called:  !prevState.called   
      }))     
    }
  }

  getSolarCall = (loca) => {
    // eslint-disable-next-line
    getSolar(this.updateDataObjSmall, this.updateDataObjLarge, this.updateDataObjMonthly);
  }     
  
  
  updateDataObjSmall = (valueToUpdateWith) => {
    //accepts an array of objects and passes to cards
    // <MonthlyTable dataObjMonthly={this.state.dataObjMonthly} />

    let locationBox = [JSON.parse(localStorage.getItem('locationBox'))];
    valueToUpdateWith = locationBox.concat(valueToUpdateWith);
    if(valueToUpdateWith){
        this.setState((prevState) => ({
        dataObjSmallCard: valueToUpdateWith,
      }))
    }
  }

  updateDataObjLarge = (valueToUpdateWith) => {
    if(valueToUpdateWith){
        this.setState((prevState) => ({
        dataObjLargeCard: valueToUpdateWith
      }))
    }
  }

  updateDataObjMonthly = (valueToUpdateWith) => {
    if(valueToUpdateWith){
        this.setState((prevState) => ({
        dataObjMonthly: valueToUpdateWith
      }))
    }
  }
}


export default DashboardApp;
