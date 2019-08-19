import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Main from './Main';
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reactjs.org/" target="_blank">
              <img src={logo} width="30" height="30" alt="reactjs.org" />
            </a>
            <Link to="/Main" className="navbar-brand">MERN-Stack Reservation System</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Current Reservation</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Reservation</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/Main" component={Main} />

        </div>
      </Router>
    );
  }
}

export default App;