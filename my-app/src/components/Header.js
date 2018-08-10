import React from 'react';
import logo from '../sunLogo1.png';
import '../App.css';


export default class Header1 extends React.Component {
  render() {
    return (
      <div>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Easy Solar Estimator</h1>
      </header>
      </div>
    );
  }
}