// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesListReducer from './reducers/messages_list_reducer';
import channelsListReducer from './reducers/channels_list_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const initialState = {
  messagesList:
  [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channelsList: [ "Japan", "Programmers", "Dogs" ],
  selectedChannel: "Japan",
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// State and reducers
const reducers = combineReducers({
  messagesList: messagesListReducer,
  channelsList: channelsListReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
