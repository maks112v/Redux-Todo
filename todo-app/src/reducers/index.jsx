import { ADD_TASK } from  '../actions';

const initialState = {
  tasks: [
    {
      id: Date.now(),
      name: 'Get Started',
      desc: 'Learn how to use this todo app',
      completed: false,
      type: 3,
    },
  ]
}


const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_TASK:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer;