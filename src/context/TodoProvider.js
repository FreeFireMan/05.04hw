import React, {useState} from 'react';
import {TodoContext} from './Contexts';

function TodoProvider({children}) {
    const [todos, setTodos] = useState();

    const createTodo = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.descr) {
            alert ('Error! Please check inputs.');
            return;
        }

        setTodos([newTodo, ...todos]);
    };

    return (
        <TodoContext.Provider value={{
            todos,
            createTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;