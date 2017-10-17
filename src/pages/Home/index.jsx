import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="boxesContainer">
          <div className="alone">Alone</div>
          <div className="oneVsOne">1 vs 1</div>
          <div className="playInTeam">Play in Team</div>
          <div className="teamsVsTeams">Teams vs Teams</div>
          <div className="deathMatch">DeathMatch</div>
          {
            window.user.firebaseToken ?
              <div className="others">
                <div className="stats fa fa-bar-chart"></div>
                <div className="config fa fa-cog"></div>
                <div className="help fa fa-question"></div>
                <div className="logout fa fa-power-off"></div>
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
