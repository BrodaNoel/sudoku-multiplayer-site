import React, { Component } from 'react';
import utils from 'utils';
import './styles.css';

class Timer extends Component {
  state = {
    time: '00:00:00'
  };

  constructor(props) {
    super(props);

    if (props.finishAt) {
      this.state.time = utils.timeFormat.secondsToTime((props.finishAt - this.props.startAt) / 1000);
    }
  }

  componentDidMount() {
    if (!this.props.finishAt) {
      this.interval = setInterval(() => {
        this.setState({
          time: utils.timeFormat.secondsToTime((Date.now() - this.props.startAt) / 1000)
        })
      }, 1000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.finishAt) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Timer">{this.state.time}</div>
    );
  }
}

export default Timer;
