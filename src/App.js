import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import CreateTodo from "./components/create-todo.component";
// import EditTodo from "./components/edit-todo.component";
// import TodosList from "./components/todos-list.component";
// import logo from "./logo.svg";
import Home from './Home';
import Login from "./Login";
import fire from './config/Fire';
// import Form from './config/Form';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user:{},
    } 
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
       <div className="App">
        {this.state.user ? (<Home />) : (<Login/>)}
      
      </div>
{/* 
        <Router>
         
          <div className="container">
            <h2> Company</h2>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://reactjs.org/" target="_blank">
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
              </a>
              <Link to="/create" className="navbar-brand">MERN-Stack Reservation App</Link>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Reservations</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Reservations</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;