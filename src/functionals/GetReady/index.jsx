import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

class GetReady extends Component {
  render() {
    return (
      <div className="GetReady">
        <div>Are your ready?</div>

        <Link className="button" to={`/play/${this.props.gameId}`}>Yes!</Link>
      </div>
    );
  }
}

GetReady.propTypes = {
  gameId: PropTypes.string.isRequired
}

export default GetReady;
