import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Main from './Main';
import Image from "./images/pipeline2.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.pipelineworkspaces.com/" target="_blank">
              <img src={Image} width="60" height="60" alt="pipeline.com" />
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/Main" className="nav-link"><strong>Reserve Your Space</strong></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link"><strong>Current Reservation</strong></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"><strong>Create Reservation</strong></Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="contact.html" className="nav-link"><strong>Contact Us</strong></Link>
                </li> */}
              </ul>
            
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