import React from 'react';

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

export default MessageForm;
