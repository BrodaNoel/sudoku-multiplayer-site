import React, { Component } from 'react';
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
          <div className="others">
            <div className="stats">STATS</div>
            <div className="config">CONFIG</div>
            <div className="help">HELP</div>
            <div className="logout">Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
