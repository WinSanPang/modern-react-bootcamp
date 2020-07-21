import uuid from 'uuid/dist/v4';

import useLocalStorageState from './useLocalStorageState';

export default initialToDos => {
  const [toDos, setToDos] = useLocalStorageState('toDos', initialToDos);
  return {
    toDos,
    addToDo: newToDoText => {
      setToDos([...toDos, {id: uuid(), task: newToDoText, completed: false}]);
    },
    removeToDo: toDoId => {
      const updatedToDos = toDos.filter(toDo => toDo.id !== toDoId);
      setToDos(updatedToDos);
    },
    toggleToDo: toDoId => {
      const updatedToDos = toDos.map(toDo =>
        toDo.id === toDoId ? {...toDo, completed: !toDo.completed} : toDo
      );
      setToDos(updatedToDos);
    },
    editToDo: (toDoId, newTask) => {
      const updatedToDos = toDos.map(toDo =>
        toDo.id === toDoId ? {...toDo, task: newTask} : toDo
      );
      setToDos(updatedToDos);
    }
  }  
}