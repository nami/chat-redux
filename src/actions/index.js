const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel){
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
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

export function createMessage(channel, author, content) {
  // TODO
}
