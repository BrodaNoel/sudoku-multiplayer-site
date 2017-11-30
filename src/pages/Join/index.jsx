import React, { Component } from 'react';
import Loading from 'visuals/Loading';
import GetReady from 'functionals/GetReady';
import './styles.css';

class Join extends Component {
  state = {
    isLoading: false,
    gameId: this.props.match.params.gameId
  };

  onReady = () => {
    this.props.history.push(`/play/${this.state.gameId}`);
  }

  render() {
    return (
      <div className="Join">
        { this.state.isLoading ? <Loading /> : null }
        {
          // Here gonna have the SelectTeam component
        }
        { !this.state.isLoading ? <GetReady gameId={this.state.gameId} onReady={this.onReady} /> : null }
      </div>
    );
  }
}

export default Join;
