import React, { Component } from 'react';
import CreateTodo from "./components/create-todo.component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
    render() {
        return (

            <Router>

                <div className="main">
                    <br />
                    <h1>Meeting Rooms</h1>
                    <br />
                    <h2>Room 1 (Small)</h2>
                    <img src="http://www.cambridgehotel.ca/wp-content/uploads/2017/01/meeting-room-4.jpg" height="274" width="350" alt="Trivia Game" />
                    <a href="/create" className="nav-link"><h2>Reserve This Space</h2></a>
                    <br />
                    <br />
                    <h2>Room 2 (Medium)</h2>
                    <img src="https://www.goubiq.com/wp-content/uploads/2016/08/Conference-Room_s.jpg" height="274" width="350" alt="Trivia Game" />
                    <a href="/create" className="nav-link"><h2>Reserve This Space</h2></a>
                    <br />
                    <br />
                    <h2>Room 3 (Large)</h2>
                    <img src="http://www.hotel-grandmajestic.cz/files/hotel/conferences/hotel-majestic-prague-conference-room-grand-2-conference-and-events-01.jpg" height="274" width="350" alt="Trivia Game" />
                    <a href="/create" className="nav-link"><h2>Reserve This Space</h2></a>


                    <Route path="/create" exact component={CreateTodo} />

                </div>

            </Router>

        );
    }

}

export default Main;
