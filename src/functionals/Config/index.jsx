import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Config extends Component {
  render() {
    return (
      <div className="Config">
        <div>
          <input type="checkbox" disabled="disabled" /> Check for errors
        </div>

        <div>
          <input type="checkbox" disabled="disabled" /> Check for duplicated numbers
        </div>

        <div>
          <input type="checkbox" disabled="disabled" /> Highlight areas
        </div>

        <div>
          <input type="checkbox" disabled="disabled" /> Highlight identical numbers
        </div>

        <div>
          <input type="checkbox" disabled="disabled" /> Auto remove pencil notes
        </div>

        <div>
          <input type="checkbox" disabled="disabled" checked="checked" /> Show timer
        </div>

        <div
          className="button"
          onClick={() => this.props.onSelect({ showTimer: true }) }>Save Config</div>
      </div>
    );
  }
}

Config.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default Config;
