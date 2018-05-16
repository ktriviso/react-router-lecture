/* importing dependencies */
import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

/* importing components */
import Header from './components/Header';
import Home from './components/Home';
import Topics from './components/Topics';
import Router from './components/Routes';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Switch>
           {/*<Route exact path="/" render={() => (<div>Hi</div>)} />*/}
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" render={() => (<p>using render</p> )} />
            <Route exact path="/topics" component={Topics} />
            <Route path="/topics/:routes" component={Router} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
