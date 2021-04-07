import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <>
      <main>
        <Router>
          <Header />

          <Switch>
            <Route path={'/'} exact></Route>
            <Route path={'/create-todo'}></Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
