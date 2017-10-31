import React, { Component } from 'react';
import Sudoku from 'functionals/Sudoku';
import './styles.css';

class Play extends Component {
  state = {
    type: 'alone',
    config: {},
    init: {
      0: 1,
      12: 4
    },
    done: {
      1: 9,
      46: 8
    }
  };

  onChange = (index, prevNumber, newNumber) => {
    //
  }

  render() {
    return (
      <div className="Play">
        <Sudoku
          init={this.state.init}
          config={this.state.config}
          done={this.state.done}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default Play;
