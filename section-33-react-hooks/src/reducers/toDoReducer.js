import uuid from 'uuid/dist/v4';

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return [...state, {id: uuid(), task: action.task, completed: false}];
    case 'REMOVE':
      return state.filter(toDo => toDo.id !== action.id);
    case 'TOGGLE':
      return state.map(toDo =>
        toDo.id === action.id ? {...toDo, completed: !toDo.completed} : toDo
      );
    case 'EDIT':
      return state.map(toDo =>
        toDo.id === action.id ? {...toDo, task: action.newTask} : toDo
      );
    default:
      return state;
  }
};

export default reducer;