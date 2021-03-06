import React, { Component } from 'react';
import * as firebase from 'firebase';
import './styles.css';

class Login extends Component {
  state = {
    buttonLabel: 'Login with Facebook'
  };

  loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.props.history.push(`/`);
      })
    .catch(() => {
      this.props.history.push(`/login/denied`);
    });
  }

  render() {
    return (
      <div className="Login">
        <div className="facebook" onClick={this.loginWithFacebook}>{this.state.buttonLabel}</div>
      </div>
    );
  }
}

export default Login;
