import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header className={'header'}>
            <nav>
                <NavLink to={'/'} exact>Todo List</NavLink>
                <NavLink to={'/create-todo'} exact>Add Todo</NavLink>
            </nav>

            <div>
                <span>Total: {}</span>
                <span>Active: {}</span>
                <span>Done: {}</span>
            </div>
        </header>
    );
}

export default Header;
