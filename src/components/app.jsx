import React from 'react';
import MessagesList from '../containers/messages_list'
import ChannelList from '../containers/channel_list'

const App = () => {
  return (
    <div className="app">
      <div className="icon-col">
        <img src="" alt=""/>
      </div>
      <ChannelList />
      <MessagesList />
    </div>
  );
};

export default App;
