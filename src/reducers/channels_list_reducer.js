import { SET_CHANNELS } from '../actions';

export default function(state, action) {
  if (state === undefined) {
      return [ "Japan", "Programmers", "Dogs" ];
  }

  switch (action.type) {
    case SET_CHANNELS:
      return action.payload
    default:
      return state;
  }
}
