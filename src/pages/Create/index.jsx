import React, { Component } from 'react';
import Level from 'functionals/Level';
import actions from 'actions';
import Config from 'functionals/Config';
import GetReady from 'functionals/GetReady';
import './styles.css';

class Create extends Component {
  state = {
    type: null,
    level: null,
    config: null,
    teams: null,

    nowShow: 'level'
  };

  constructor(props) {
    super(props);

    const gameTypes = {
      'alone': {},
    };

    // If gameType is unknown, use "alone".
    const type = gameTypes[props.match.params.type] ? props.match.params.type : 'alone';
    this.state.type = type;
  }

  onSelectLevel = level => {
    this.setState({
      level,
      nowShow: 'config'
    });
  }

  onSelectConfig = config => {
    if (this.state.type === 'alone') {
      const game = {
        type: this.state.type,
        level: this.state.level,
        config: this.state.config,
        teams: this.state.teams
      };

      actions.game.create(game).then((gameCreated) => {
        this.props.history.push(`/join/${gameCreated.id}`);
      });

      return;
    }

    this.setState({
      config,
      nowShow: 'createTeams'
    });
  }

  render() {
    return (
      <div className="Create">
        { this.state.nowShow === 'level' ? <Level onSelect={ this.onSelectLevel } /> : null }
        { this.state.nowShow === 'config' ? <Config onSelect={ this.onSelectConfig } /> : null }
        { this.state.nowShow === 'createTeams' ? null : null }
      </div>
    );
  }
}

export default Create;
