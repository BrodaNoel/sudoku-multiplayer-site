import React, { Component } from 'react';
import actions from 'actions';
import Sudoku from 'functionals/Sudoku';
import Loading from 'visuals/Loading';
import Timer from 'visuals/Timer';
import './styles.css';

class Play extends Component {
  state = {
    type: 'alone',
    config: {
      showTimer: true
    },
    init: {
      0: 1,
      12: 4
    },
    done: {
      1: 9,
      46: 8
    },

    // TODO: Get this from backend
    teamId: 0,

    startAt: Date.now(),

    isLoading: true
  };

  constructor(props) {
    super(props);

    const gameId = this.props.match.params.gameId;

    actions.game.get(gameId).then((game) => {
      this.setState({
        type: game.type,
        config: game.config,
        startAt: game.startAt,
        isLoading: false
      });
    });
  }

  onChange = (i, newValue) => {
    const gameId = this.props.match.params.gameId;
    actions.game.changeValue(gameId, this.state.teamId, i, newValue);
  }

  render() {
    return (
      <div className="Play">
        { !this.state.isLoading && this.state.config.showTimer ? <Timer startAt={this.state.startAt} /> : null }

        {
          this.state.isLoading
            ? <Loading />
            : <Sudoku
                init={this.state.init}
                config={this.state.config}
                done={this.state.done}
                onChange={this.onChange} />
        }
      </div>
    );
  }
}

export default Play;
