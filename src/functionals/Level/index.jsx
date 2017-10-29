import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Level extends Component {
  render() {
    return (
      <div className="Level">
        <div className="se" onClick={() => this.props.onSelect(0) }>Super Easy</div>
        <div className="ve" onClick={() => this.props.onSelect(1) }>Very Easy</div>
        <div className="e" onClick={() => this.props.onSelect(2) }>Easy</div>
        <div className="m" onClick={() => this.props.onSelect(3) }>Medium</div>
        <div className="h" onClick={() => this.props.onSelect(4) }>Hard</div>
        <div className="hh" onClick={() => this.props.onSelect(5) }>Harder</div>
        <div className="vh" onClick={() => this.props.onSelect(6) }>Very Hard</div>
        <div className="sh" onClick={() => this.props.onSelect(7) }>Super Hard</div>
        <div className="i" onClick={() => this.props.onSelect(8) }>Impossible</div>
      </div>
    );
  }
}

Level.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default Level;
