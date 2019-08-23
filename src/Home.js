import React, { Component } from 'react';
import fire from './config/Fire';
import Form from './Form';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="col-md-6">
                <h1 id="demoFont">Reservation System</h1>
                <Form />
                <br />
                {/* <Calendar /> */}
                <br />
                <button className="myButton" onClick={this.logout}>Logout</button>
            </div>

        );
    }
}


export default Home;
