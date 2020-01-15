import React from 'react';

class Message extends React.Component {
  render() {
    return(
      <div className="message">
        <div className="message-details">
          <h6>{ this.props.message.author }</h6>
          <p>{ this.props.message.created_at }</p>
        </div>
        <p>{ this.props.message.content }</p>
      </div>
    );
  }
}

export default Message;
