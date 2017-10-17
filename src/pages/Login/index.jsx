import React, { Component } from 'react';
import * as firebase from 'firebase';
import './styles.css';

class Login extends Component {
  state = {
    buttonLabel: 'Login with Facebook'
  };

  loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      this.setState({ buttonLabel: 'Redirecting...' });

      result.user.getIdToken().then(token => {
        window.user = {
          data: result.user,
          credentials: result.credential,
          firebaseToken: token
        };

        setTimeout(() => {
          this.props.history.push(`/`);
        }, 1000);
      });
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
