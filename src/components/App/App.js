import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorMessage, PhotoModal, Header, Footer } from '../';
import { Home, SignIn, SignUp, Profile } from '../../views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/photo" component={PhotoModal} />
						<Route path="*" component={ErrorMessage} />
					</Switch>
				</main>
        <Footer />
      </div>
    );
  }
}

export default App;
