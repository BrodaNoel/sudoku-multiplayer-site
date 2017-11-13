import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './styles.css';

class Timer extends Component {
  state = {
    time: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: utils.timeFormat.secondsToTime((Date.now() - this.props.startAt) / 1000)
      })
    }, 1000);
  }

  render() {
    return (
      <div className="Timer">{this.state.time}</div>
    );
  }
}

Timer.propTypes = {
  startAt: PropTypes.number.isRequired
}

export default Timer;
