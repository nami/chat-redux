import { CURRENT_USER } from '../actions';

export default function(state, action) {
  if (state === undefined) {
      return "";
  }

  switch (action.type) {
    case CURRENT_USER:
      return action.payload
    default:
      return state;
  }
}
