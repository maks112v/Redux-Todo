import { ADD_TASK, TOGGLE_TASK } from  '../actions';

const initialState = {
  tasks: [
    {
      id: Date.now(),
      name: 'Get Started',
      completed: false,
      type: 3,
    },
  ],
  initalPriority: 1
}


const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_TASK:
      const newTask = {
        name: action.payload.task,
        id: Date.now(),
        completed: false,
        type: Number(action.payload.priority),
      }
      return {
        ...state,
        tasks: [
          ...state.tasks,
          newTask
        ]
      }
    case TOGGLE_TASK:
      console.log(action.payload);
      return{
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === action.payload){
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task
        })
      }
    default:
      return state
  }
}

export default reducer;