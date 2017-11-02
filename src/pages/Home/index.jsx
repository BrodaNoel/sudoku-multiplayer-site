import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import actions from 'actions';
import './styles.css';

class Home extends Component {
  state = {
    isLogged: !!window.user.firebaseToken
  };

  logout = () => {
    firebase.auth().signOut()
      .then(actions.login.logout)
      .then(() => {
        this.setState({ isLogged: false });
      })
      .catch(() => {
        // :shrug:
      });
  }

  render() {
    return (
      <div className="Home">
        <div className="boxesContainer">
          <Link to={`/create/alone`}><div className="alone">Alone</div></Link>
          <div className="oneVsOne">1 vs 1</div>
          <div className="playInTeam">Play in Team</div>
          <div className="teamsVsTeams">Teams vs Teams</div>
          <div className="deathMatch">DeathMatch</div>
          {
            this.state.isLogged ?
              <div className="others">
                <div className="stats fa fa-bar-chart"></div>
                <div className="config fa fa-cog"></div>
                <div className="help fa fa-question"></div>
                <div className="logout fa fa-power-off" onClick={this.logout}></div>
              </div>
            :
              <Link to={`/login`}>
                <div className="login">Login</div>
              </Link>
          }
        </div>
      </div>
    );
  }
}

export default Home;
