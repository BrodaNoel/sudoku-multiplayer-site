import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import actions from 'actions';
import utils from 'utils';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Create from 'pages/Create';
import Join from 'pages/Join';
import Play from 'pages/Play';
import LoginDenied from 'pages/LoginDenied';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    window.user = utils.storage.local.get('user') || {};

    firebase.initializeApp({
      apiKey: "AIzaSyCTPQH9G9B7UBz1asD9_r_hZE5xY1NVLpQ",
      authDomain: "sudokumultiplayer.firebaseapp.com",
      databaseURL: "https://sudokumultiplayer.firebaseio.com",
      projectId: "sudokumultiplayer",
      storageBucket: "sudokumultiplayer.appspot.com",
      messagingSenderId: "296284276109"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          actions.login.login({
            data: user,
            firebaseToken: token
          });
        });
      }
    });

  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />

          <Route path='/login/denied' component={ LoginDenied } />
          <Route path='/login' component={ Login } />

          <Route path='/create/:type?' component={ Create } />

          <Route path='/join/:gameId' component={ Join } />
          <Route path='/play/:gameId' component={ Play } />
        </Switch>
      </div>
    );
  }
}

export default App;
