import { combineReducers } from 'redux';
import { START_TIMER, STOP_TIMER, RESET_TIMER } from '../actions/actions';

const defaultState = { timerStatus: false, initialValue: 60000 }

function timer(state = defaultState, action) {
  switch (action.type) {
  case START_TIMER:
  return {
    timerStatus: action.status,
    timer: action.timer
    };
  case STOP_TIMER:
    return {
      timerStatus: action.status,
      timer: action.timer
    };
  case RESET_TIMER:
    return { 
      timerStatus: action.status,
      timer: action.timer
    };
  default:
    return state;
  }
}

const pomodoroApp = combineReducers({
  timer
});

export default pomodoroApp;