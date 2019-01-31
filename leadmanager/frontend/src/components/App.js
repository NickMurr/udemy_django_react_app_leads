import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
