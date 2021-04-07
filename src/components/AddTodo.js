import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/Contexts';
import Style from './Style.css';

function AddTodo() {
    const [todoValues, setTodoValues] = useState({
        id: null,
        title: '',
        descr: '',
    });

    const {createTodo} = useContext(TodoContext);

    const userValuesTodo = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value});

    const addTodo = () => {

        setTodoValues({
            id: null,
            title: '',
            descr: '',
        });
    };

    return (
        <div className={'addTodo'}>
            <h1>Add New Todo</h1>

            <div>
                <input value={todoValues.title} onChange={userValuesTodo} type={'text'} name={'title'} placeholder={'title'} />
                <input value={todoValues.descr} onChange={userValuesTodo} type={'text'} name={'descr'} placeholder={'description'} />
                <button onClick={addTodo}>add todo</button>
            </div>
        </div>
    );
}

export default AddTodo;