import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login";
import MainMenu from "./components/MainMenu";


class App extends Component {
  render() {
    return (
        <Router>
            <Route path='/' exact component={Login}/>
            <Route path='/home' exact component={MainMenu}/>
        </Router>
    );
  }
}

export default App;
