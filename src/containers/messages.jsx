import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class Messages extends React.Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount(){
    this.newMessages = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.messagesBox.scrollTop = this.messagesBox.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.newMessages)
  }

  fetchMessages = () => {
    this.props.fetchMessages("dogs");
  }

  render() {
    return(
      <div className="message-list" ref={(messagesBox) => { this.messagesBox = messagesBox; }}>
        {
          this.props.messages.map((message) => {
            return <Message key={ message.id } message={ message } />
          })
        }
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Messages);
