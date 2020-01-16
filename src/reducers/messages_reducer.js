import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const dupState = state.slice(0);
      dupState.push(action.payload);
      return dupState;
    default:
      return state;
  }
}
