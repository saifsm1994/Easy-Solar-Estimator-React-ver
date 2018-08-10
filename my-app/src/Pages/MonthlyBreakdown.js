import React, { Component } from 'react';
import '../App.css';
import Header1 from '../components/Header';
import Navbar1 from '../components/Navbar';
// eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';
import getLocation from '../Functionality/getLocation';
import getSolar from '../Functionality/getSolar';
import Footer1 from '../components/Footer';
import MonthlyTable from '../components/MonthlyTable';
import MonthlyChart from '../components/MonthlyChart';
import {BrowserRouter, Route} from 'react-router-dom'


// eslint-disable-next-line
// const dataMonth=[ "Jan"]; const dataTitle=[ "apper" ];
// eslint-disable-next-line



class App extends Component {
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

      {!this.state.called && this.getLocationer()}
      <h1>Breakdown of Sunlight by Month for your location</h1>
      <br/>
      <MonthlyChart dataObjMonthly={this.state.dataObjMonthly} />
      <br/><br/><br/>
      <MonthlyTable dataObjMonthly={this.state.dataObjMonthly} />
      <Footer1 />

      
      
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


export default App;
