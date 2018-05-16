import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import QuoteList from './components/QuoteList';
import SingleQuote from './components/SingleQuote';
import About from './components/partials/About';

class App extends Component {
    constructor(){
        super()
    }

  render() {
    return (
        <div className="adaquotes">
            <Header />
            <Switch>
                <Route path='/singlequote/:id' component={SingleQuote} />
                <Route path='/quotelist' component={QuoteList} />
                <Route path='/about' component={About} />
                <Route path='/' component={Home} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
