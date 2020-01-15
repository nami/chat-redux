import { SELECT_CHANNEL } from '../actions';

export default function(state, action) {
  if (state === undefined) {
      return "Japan";
  }

  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload
    default:
      return state;
  }
}
