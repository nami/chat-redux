import React from 'react';
import Messages from '../containers/messages'
import Channels from '../containers/channels'

const App = () => {
  return (
    <div className="app">
      <div className="icon-col">
        <img src="https://raw.githubusercontent.com/nami/chat-redux/master/assets/images/lego.jpg" alt="icon"/>
      </div>
      <Channels />
      <Messages />
    </div>
  );
};

export default App;
