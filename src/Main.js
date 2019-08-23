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

                    <div className="card">
                        <br />
                        <h1 id="demoFont2">Meeting Rooms</h1>
                        <br />

                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://assets-global.website-files.com/5b0eb78d23154b82952ae4b1/5b571ee623af1b792885e4c0_photo-1517502884422-41eaead166d4_meitu_37.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 1 (Small)</MDBCardTitle>
                                    <MDBCardText>
                                    Our Conference Room has all the a/v technology you might need for your meeting.
                                     Equipped with a glass board, seating for 8, great for any type of presentation.
                                      The room has corner windows with beautiful Brickell Ave. views. 
                                    </MDBCardText>
                                    <MDBBtn href="/create"><strong>Reserve This Space</strong></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <br />
                        <br />

                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://www.goubiq.com/wp-content/uploads/2016/08/Conference-Room_s.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 2 (Medium)</MDBCardTitle>
                                    <MDBCardText>
                                    Meet your clients in a well-designed and professional space. Available hourly /daily.
                                     Fully equipped with integrated conference phone and video system, 
                                    70” TV screen, Apple TV, dedicated secure Wi-Fi, whiteboard, seating for 8.
                                    </MDBCardText>
                                    <MDBBtn href="/create"><strong>Reserve This Space</strong></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <br />
                        <br />

                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://www.pipelineworkspaces.com/wp-content/uploads/2019/06/meetingconferencecoralgables.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Room 3 (Large)</MDBCardTitle>
                                    <MDBCardText>
                                    Our attractive, fully equipped conference rooms and business meeting rooms provide an ideal working environment.
                                     They include state-of-the-art equipment and capabilities plus free WIFI and free local and long distance calls.
                                      And all our meeting facilities come with a thoroughly trained, professional support staff.
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
