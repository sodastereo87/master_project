import React, { Component } from 'react';
import axios from 'axios';
import Calendar from "../Calendar";


export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
            alert("Your Reservation Has Been Created")
        

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:3001/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3 id="demoFont3">Create New Reservation</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-group">
                        <h3>Select Your Room</h3>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Room 1"
                                checked={this.state.todo_priority === 'Room 1'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Room 1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Room 2"
                                checked={this.state.todo_priority === 'Room 2'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Room 2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="Room 3"
                                checked={this.state.todo_priority === 'Room 3'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Room 3</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Make Reservation" className="btn btn-primary" onclick="myFunction()"></input>
                       
                    </div>
                </form>
                <div> <h2>Select The Date</h2></div>
                <Calendar />
                <br />
            </div>
           
        )
    }
}