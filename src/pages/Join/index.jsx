import React, { Component } from 'react';
import Loading from 'visuals/Loading';
import GetReady from 'functionals/GetReady';
import './styles.css';

class Join extends Component {
  state = {
    isLoading: false
  };

  render() {
    return (
      <div className="Join">
        {
          this.state.isLoading
            ? <Loading />
            : <GetReady gameId={this.props.match.params.gameId} />
        }
      </div>
    );
  }
}

export default Join;
