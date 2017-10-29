import React, { Component } from 'react';
import Level from 'functionals/Level';
import Config from 'functionals/Config';
import GetReady from 'functionals/GetReady';
import './styles.css';

class Create extends Component {
  state = {
    id: 'xxxxxxxxxx',
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
    let nowShow;
    if (this.state.type === 'alone') {
      nowShow = 'getready';
    }

    this.setState({
      config,
      nowShow
    });
  }

  render() {
    return (
      <div className="Create">
        { this.state.nowShow === 'level' ? <Level onSelect={ this.onSelectLevel } /> : null }
        { this.state.nowShow === 'config' ? <Config onSelect={ this.onSelectConfig } /> : null }
        { this.state.nowShow === 'getready' ? <GetReady gameId={this.state.id} /> : null }
      </div>
    );
  }
}

export default Create;
