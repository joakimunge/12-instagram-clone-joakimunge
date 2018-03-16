import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorMessage, PhotoModal, Header, Footer } from '../';
import { Home, SignIn, SignUp, Profile, Upload } from '../../views';
import { default as requireAuth } from '../HOC/RequireAuth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
					<Switch>
						<Route exact path="/" component={requireAuth(Home)} />
						<Route exact path="/users/:username" component={requireAuth(Profile)} />
						<Route exact path="/posts/:post" component={requireAuth(PhotoModal)} />
						<Route exact path="/upload" component={Upload} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/signin" component={SignIn} />
						<Route path="*" component={ErrorMessage} />
					</Switch>
				</main>
        <Footer />
      </div>
    );
  }
}

export default App;
