/*
 * Action Types
 */

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

/*
 * Action Creators
 */
export function startTimer(timer) {
  return { type: START_TIMER, status: true, timer: timer };
}

export function stopTimer(timer) {
  return { type: STOP_TIMER, status: false, timer: timer };
}

export function resetTimer() {
  return { type: RESET_TIMER, status: false, timer: 60000 };
}
