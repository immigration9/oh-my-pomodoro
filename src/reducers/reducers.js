import { combineReducers } from 'redux';
import { START_TIMER, STOP_TIMER, RESET_TIMER, CHANGE_TIMER } from '../actions/timerActions';

const defaultTimerState = { 
  timerStatus: false, 
  timerValue: 60000,
};

const defaultPomodoroStatus = ["Working", "Short Break", "Long Break"];
const defaultPomodoroState = {
  pomodoroStatus: defaultPomodoroStatus[0]
}

function timer(state = defaultTimerState, action) {
  switch (action.type) {
  case START_TIMER:
    return Object.assign({}, state, {
      timerStatus: action.status,
    });
  case STOP_TIMER:
    return Object.assign({}, state, {
      timerStatus: action.status
    });
  case RESET_TIMER:
    return Object.assign({}, state, {
      timerStatus: action.status,
      timerValue: action.timer
    });
  case CHANGE_TIMER:
    return Object.assign({}, state, {
      timerValue: state.timerValue - action.tick
    });
  default:
    return state;
  }
}

function status(state = defaultPomodoroState, action) {
  switch (action.type) {
  case CHANGE_TYPE:
    return Object.assign({}, state, {
      pomodoroStatus: action.type
    });
  default:
    return state;
  }
}

const pomodoroApp = combineReducers({
  timer,
  status
});

export default pomodoroApp;