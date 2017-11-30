import React, { Component } from 'react';
import actions from 'actions';
import Loading from 'visuals/Loading';
import PropTypes from 'prop-types';
import './styles.css';

class GetReady extends Component {
  state = {
    isLoading: false
  };

  onReady = () => {
    this.setState({ isLoading: true });
    actions.game.player.ready(this.props.gameId).then(this.props.onReady);
  }

  render() {
    return (
      <div className="GetReady">
        {
          this.state.isLoading
           ? <Loading />
           : (
             <div>
               <div>Are your ready?</div>
               <div className="button" onClick={this.onReady}>Yes!</div>
             </div>
           )
        }
      </div>
    );
  }
}

GetReady.propTypes = {
  gameId: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
}

export default GetReady;
