import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/index';

class Channels extends React.Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  render() {
    return(
      <div className="channel-list">
        <h5>React + Redux Chat</h5>
        {
          this.props.channels.map((channel) =>
            <h6 key={channel} className={channel === this.props.selectedChannel ? 'active' : null} onClick={() => this.handleClick(channel)}>#{channel}</h6>
          )
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

function mapStateToProps(state) { return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Channels);
