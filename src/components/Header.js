import React from 'react';
import {Link} from 'react-router-dom';
import Style from './Style.css';

function Header() {
    return (
        <header className={'header'}>
            <nav>
                <Link to={'/'}>Todo List</Link>
                <Link to={'/create-todo'}>Add Todo</Link>
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