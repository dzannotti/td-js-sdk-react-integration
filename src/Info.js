/* global td */
import React, { Component } from 'react';
import './Dashboard.css';

class Info extends Component {
  customEvent = () => {
    const sale = {
      itemId: 101,
      saleId: 10,
      userId: 1
    };
    td.addRecord('sales', sale);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Info Page</h1>
        </header>
        <p className="App-intro">This is an Info page</p>
        <a href="/somewhere" onClick={e => e.preventDefault()}>
          Test click tracking
        </a>
        <a href="#" onClick={this.customEvent}>
          Test custom event
        </a>
      </div>
    );
  }
}

export default Info;
