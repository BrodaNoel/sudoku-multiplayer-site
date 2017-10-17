import React, { Component } from 'react';
import actions from 'actions';
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
        this.setState({ buttonLabel: 'Redirecting...' });

        result.user.getIdToken().then(token => {
          actions.login.login({
            data: result.user,
            credentials: result.credential,
            firebaseToken: token
          });

          setTimeout(() => {
            this.props.history.push(`/`);
          }, 1000);
        });
      })
    .catch(() => {
      this.props.history.push(`/login/denied`);
    });
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.loginWithFacebook}>{this.state.buttonLabel}</button>
      </div>
    );
  }
}

export default Login;
