import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import actions from 'actions';
import Loading from 'visuals/Loading';
import Timer from 'visuals/Timer';
import './styles.css';

class Done extends Component {
  state = {
    startedAt: null,
    solvedAt: null,

    // Local vars
    isLoading: true
  };

  constructor(props) {
    super(props);
    const gameId = props.match.params.gameId;

    actions.game.get(gameId).then((r) => {
      this.setState({
        startedAt: r.startedAt,
        solvedAt: r.teams[0].solvedAt,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <div className="Done">
        <h2>Game over!</h2>

        <div>
          <h3>This took...</h3>
          {
            this.state.isLoading
              ? <Loading></Loading>
              : <Timer startAt={this.state.startedAt} finishAt={this.state.solvedAt}></Timer>
          }
        </div>

        <Link className="button" to="/">Done</Link>
      </div>
    );
  }
}

export default Done;
