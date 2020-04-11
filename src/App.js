import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login.js";


class App extends Component {
  render() {
    return (
        <Router>
            <Route path='/' exact component={Login}/>
        </Router>
    );
  }
}

export default App;
