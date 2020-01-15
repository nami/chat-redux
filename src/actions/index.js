export const SET_MESSAGES = 'SET_MESSAGES';

export function setMessages(messages){
  return {
    type: SET_MESSAGES,
    payload: messages
  }
}

export const SET_CHANNELS = 'SET_CHANNELS';

export function setChannels(channels){
  return {
    type: SET_CHANNELS,
    payload: channels
  }
}

export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function selectChannel(channel){
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

export const CURRENT_USER = 'CURRENT_USER';

export function currentUser(user){
  return {
    type: CURRENT_USER,
    payload: user
  }
}
