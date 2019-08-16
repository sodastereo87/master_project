import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Login from "./Login";
import fire from './config/Fire';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
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
          {this.state.user ? (<Home />) : (<Login />)}

        </div>

      </div>
    );
  }
}

export default App;