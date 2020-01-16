import { FETCH_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const dupState = state.slice(0);
      dupState.push(action.payload);
      return dupState;
    case SELECT_CHANNEL: {
      // new channel clear messages
      return [];
    }
    default:
      return state;
  }
}
