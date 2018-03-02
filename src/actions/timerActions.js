/*
 * Action Types
 */

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const CHANGE_TIMER = 'CHANGE_TIMER';

/*
 * Action Creators
 */
const defaultTime = 10000;
const tick = 1000;

export function startTimer() {
  return { 
    type: START_TIMER, 
    status: true
  };
}

export function stopTimer(timer) {
  return { 
    type: STOP_TIMER, 
    status: false
  };
}

export function resetTimer() {
  return { 
    type: RESET_TIMER, 
    status: false, 
    timer: defaultTime 
  };
}

export function changeTime() {
  return {
    type: CHANGE_TIMER,
    tick
  }
}