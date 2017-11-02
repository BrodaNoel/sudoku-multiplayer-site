import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Sudoku extends Component {
  state = {
    init: {},
    done: {}
  }

  constructor(props) {
    super(props);

    // Set Inits
    this.state.init = props.init;
    this.state.done = props.done;
  }

  onChange = (i, event) => {
    const value = event.target.value;
    const number = parseInt(value, 10);
    let newValue = '';

    if (number > 0 && number < 10) {
      newValue = number;
    }

    const newDone = Object.assign(
      {},
      this.state.done,
      { [i]: newValue }
    );

    this.setState({ done: newDone });
  }

  onKeyPress = event => {
    // TODO: Implement this UX improvement
    // event.keyCode
    // left: 37
    // up: 38
    // right: 39
    // down: 40
  }

  render() {
    return (
      <div className="Sudoku">
        {
          [...Array(81)].map((none, i) =>
            <input
              key={i}
              type="text"
              className={ this.state.init[i] ? 'init' : '' }
              disabled={this.state.init[i]}
              onChange={event => this.onChange(i, event)}
              onKeyDown={this.onKeyPress}
              value={this.state.init[i] || this.state.done[i] || ''} />
          )
        }
      </div>
    );
  }
}

Sudoku.propTypes = {
  init: PropTypes.object.isRequired,
  done: PropTypes.object.isRequired,
}

export default Sudoku;
