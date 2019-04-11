export const ADD_TASK = 'ADD_TASK';

export const addTask = newTask => {
  return{
    type: ADD_TASK,
    payload: newTask
  }
}

export const TOGGLE_TASK = 'TOGGLE_TASK';

export const toggleTask = taskId => {
  return{
    type: TOGGLE_TASK,
    payload: taskId
  }
}