
// //step one build simple reducer and initial state

export const initialTodoState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    
};

  export const todoReducer = (state, action) => {
      console.log(state);
      console.log(action);
    switch (action.type) {
        case "TOGGLE_EDITING":
      return {
        ...state,
        completed: !state.completed
      };
    case "UPDATE_TODO":
      return {
        ...state,
        item: action.payload,
        completed: false
      };
        default:
            return state;
    }
  };
