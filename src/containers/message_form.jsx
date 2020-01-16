import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: ''}
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <input className="form-control" value={this.state.value} type="text" onChange={this.handleChange} />
        <button type="submit" className="btn btn-danger">SEND</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createMessage }, dispatch );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
