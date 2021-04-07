import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './Style.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
      <main>
          <Header />
          <Switch>
            <Route path={'/'} exact component={TodoList} />
            <Route path={'/create-todo'} component={AddTodo}/>
          </Switch>
      </main>
  );
}

export default App;
