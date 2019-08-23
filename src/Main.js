import React, { Component } from 'react';
import CreateTodo from "./components/create-todo.component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './App.css';




class Main extends Component {
    render() {
        return (
            <div>
                <br />
                <Router>

                    <div className="main">
                        <br />
                        <h1>Meeting Rooms</h1>
                        <br />

                        <MDBCol>
                            <MDBCard style={{ width: "22rem", color: "black", display: "inline"}}>
                                <MDBCardImage className="img-fluid" src="http://www.cambridgehotel.ca/wp-content/uploads/2017/01/meeting-room-4.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 1 (Small)</MDBCardTitle>
                                    <MDBCardText>
                                        text here
                                    </MDBCardText>
                                    <MDBBtn href="/create"><strong>Reserve This Space</strong></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <br />
                        <br />

                        <MDBCol>
                            <MDBCard style={{ width: "22rem", color: "black", display: "inline"}}>
                                <MDBCardImage className="img-fluid" src="https://www.goubiq.com/wp-content/uploads/2016/08/Conference-Room_s.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 2 (Medium)</MDBCardTitle>
                                    <MDBCardText>
                                        text here
                                    </MDBCardText>
                                    <MDBBtn href="/create"><strong>Reserve This Space</strong></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <br />
                        <br />

                        <MDBCol>
                            <MDBCard style={{ width: "22rem", color: "black", display: "inline"}}>
                                <MDBCardImage className="img-fluid" src="http://www.hotel-grandmajestic.cz/files/hotel/conferences/hotel-majestic-prague-conference-room-grand-2-conference-and-events-01.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 2 (Medium)</MDBCardTitle>
                                    <MDBCardText>
                                        text here
                                    </MDBCardText>
                                    <MDBBtn href="/create"><strong>Reserve This Space</strong></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <Route path="/create" exact component={CreateTodo} />

                    </div>

                </Router>
            </div>
        );
    }

}

export default Main;
