import React, { Component } from 'react';
import actions from 'actions';
import utils from 'utils';
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
    initial: { },
    solved: { },

    // TODO: Get this from backend
    teamId: 0,

    startedAt: Date.now(),

    // Local vars
    isLoading: true
  };

  constructor(props) {
    super(props);

    const gameId = this.props.match.params.gameId;

    actions.game.get(gameId).then((game) => {
      this.setState({
        type: game.type,
        config: game.config,
        startedAt: game.startedAt,
        initial: game.initial,
        solved: game.teams[this.state.teamId].solved,
        solvedAt: game.teams[this.state.teamId].solvedAt,
        isLoading: false
      });
    });
  }

  onChange = (i, newValue) => {
    const gameId = this.props.match.params.gameId;
    actions.game.solved.change(gameId, this.state.teamId, i, newValue);

    this.setState(
      {
        solved: Object.assign({}, this.state.solved, {[i]: newValue})
      },
      () => {
        const isValid = utils.sudoku.isValid(
          Object.assign({}, this.state.initial, this.state.solved)
        );

        if (isValid) {
          actions.game.isSolved(gameId, this.state.teamId)
          .then((r) => {
            this.setState({ solvedAt: r.solvedAt });
          });
        }
      }
    );
  }

  render() {
    return (
      <div className="Play">
        {
          !this.state.isLoading && this.state.config.showTimer &&
            <Timer startAt={this.state.startedAt} finishAt={this.state.solvedAt} />
        }

        {
          this.state.isLoading
            ? <Loading />
            : <Sudoku
                initial={this.state.initial}
                config={this.state.config}
                solved={this.state.solved}
                onChange={this.onChange} />
        }
      </div>
    );
  }
}

export default Play;
