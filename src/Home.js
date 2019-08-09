import React, { Component } from 'react';
import fire from './config/Fire';
import Form from './Form';

const divStyle = {
    color: 'white',
    width: '25%',
    background: 'blue',
    padding: '10px',
    margin: '5px',
};

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
                <h1>Welcome</h1>
                <button onClick={this.logout} style={divStyle}>Logout</button>
                <Form />
            </div>

        );
    }
}


export default Home;
