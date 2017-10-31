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
    const number = event.target.value;
  }

  onKeyPress = event => {
    console.log(event);
  }

  render() {
    return (
      <div className="Sudoku">
        {
          [...Array(81)].map((none, i) =>
            <input
              key={i}
              type="text"
              onChange={event => this.onChange(i, event)}
              onKeyPress={this.onKeyPress}
              defaultValue={this.state.init[i] || this.state.done[i] || null} />
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
