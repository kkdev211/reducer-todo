
//step one build simple reducer and initial state

export const initialTodoState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers Part 2',
    completed: false,
    id: 1208
  }
];

  export const todoRdeucder = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
  };
