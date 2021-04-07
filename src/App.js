import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <main>
        <Router>
          <Header />

          <Switch>
            <Route path={'/'} exact> <TodoList /> </Route>
            <Route path={'/create-todo'}> <AddTodo /> </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
