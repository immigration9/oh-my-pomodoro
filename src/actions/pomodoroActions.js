/*
 * Action Types
 */

export const POMODORO_STATUS = "POMODORO_STATUS";

/*
 * Action Creators
 */
export function changeType(type) {
  return {
    type: POMODORO_STATUS,
    type
  }
}