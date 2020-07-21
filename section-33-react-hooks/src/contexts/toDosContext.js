import React, { createContext } from 'react';

import toDoReducer from '../reducers/toDoReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultToDos = [
  { id: 1, task: 'Walk the Doggie', completed: false },
  { id: 2, task: 'Unpack the Suitcase', completed: false },
  { id: 3, task: 'Cuddle the Bunnies', completed: false },
]
export const ToDosContext = createContext();
export const DispatchContext = createContext();

export function ToDosProvider(props){
  const [toDos, dispatch] = useLocalStorageReducer('toDos', defaultToDos, toDoReducer)

  return (
    <ToDosContext.Provider value={toDos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ToDosContext.Provider>
  );
}