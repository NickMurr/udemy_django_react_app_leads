/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import store from '../store';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
