import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './styles.css';

class Sudoku extends Component {
  state = {
    initial: {},
    solved: {},

    focusOn: 0
  }

  constructor(props) {
    super(props);

    // Setup
    this.state.initial = props.initial;
    this.state.solved = props.solved;
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
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
      this.state.solved,
      { [i]: newValue }
    );

    this.setState({ solved: newDone });
  }

  onKeyDown = event => {
    const i = this.state.focusOn;

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      // If it's a number

      let number = utils.keyMapping.map(event.keyCode);
      number = number > 0 && number < 10 ? number: '';

      this.changeValue(i, number);

    } else if (event.keyCode >= 37 && event.keyCode <= 40) {
      // If it's a move key

      const key = utils.keyMapping.map(event.keyCode);

      let newI = 0;
      switch (key) {
        case 'LEFT':
          newI = i - 1;
          break;

        case 'TOP':
          newI = i - 9;
          break;

        case 'RIGHT':
          newI = i + 1;
          break;

        case 'BOTTOM':
          newI = i + 9;
          break;

        default:
          newI = 0;
      }

      if (newI > 80) {
        newI = 0;
      }

      if (newI < 0) {
        newI = 80;
      }

      this.setFocus(newI);

    } else if (event.keyCode === 8 || event.keyCode === 46) {
      // It's a "delete" key
      this.changeValue(i, '');
    }
  }

  changeValue = (i, value) => {
    if (this.state.solved[i] !== value) {
      this.setState({
        solved: Object.assign({}, this.state.solved, { [i]: value })
      });

      this.props.onChange(i, value);
    }
  }

  setFocus = (i) => {
    this.setState({ focusOn: i });
  }

  getCellClass = (i) => {
    let classes = [];

    if (this.state.initial[i]) {
      classes.push('initial');
    }

    if (this.state.focusOn === i) {
      classes.push('focus');
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div className="Sudoku">
        {
          [...Array(81)].map((none, i) =>
            <div
              key={i}
              className={ this.getCellClass(i) }
              onClick={ () => this.setFocus(i) }
              >{this.state.initial[i] || this.state.solved[i] || ''}</div>
          )
        }
      </div>
    );
  }
}

Sudoku.propTypes = {
  initial: PropTypes.object.isRequired,
  solved: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Sudoku;
