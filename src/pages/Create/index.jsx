import React, { Component } from 'react';
import actions from 'actions';
import Level from 'functionals/Level';
import Loading from 'visuals/Loading';
import Config from 'functionals/Config';
import './styles.css';

class Create extends Component {
  state = {
    type: null,
    level: null,
    config: null,
    teams: null,

    nowShow: 'level',
    isLoading: false
  };

  constructor(props) {
    super(props);

    // Leave it as it is just because it could contain more info in a future
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
      this.setState({
        isLoading: true,
        config
      });

      const game = {
        type: this.state.type,
        level: this.state.level,
        config,
        teams: this.state.teams
      };

      actions.game.create(game).then((gameCreated) => {
        this.props.history.push(`/join/${gameCreated.id}`);
      });
    }
  }

  render() {
    return (
      <div className="Create">
        { this.state.isLoading ? <Loading /> : null }
        { !this.state.isLoading && this.state.nowShow === 'level' ? <Level onSelect={ this.onSelectLevel } /> : null }
        { !this.state.isLoading && this.state.nowShow === 'config' ? <Config onSelect={ this.onSelectConfig } /> : null }
        { !this.state.isLoading && this.state.nowShow === 'createTeams' ? null : null }
        { !this.state.isLoading && this.state.nowShow === 'share' ? null : null }
      </div>
    );
  }
}

export default Create;
