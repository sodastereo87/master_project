import React from 'react';

class Form extends React.Component {
    state = {
        name: "",
        room: "",
        company: "",
        email: "",
        date: ""
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: "",
            room: "",
            company: "",
            email: "",
            date: "",
            time: ""
        });
    };

    render() {
        return (

            <form>
                <br />
                <input placeholder=' Name'
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })} />
                <br />

                <input placeholder=' Room'
                    value={this.state.room}
                    onChange={e => this.setState({ room: e.target.value })} />
                <br />

                <input placeholder=' Company'
                    value={this.state.company}
                    onChange={e => this.setState({ company: e.target.value })} />
                <br />

                <input placeholder=' Email'
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })} />
                <br />

                <input placeholder=' Date'
                    value={this.state.date}
                    onChange={e => this.setState({ date: e.target.value })} />
                <br />
                
                
                <input placeholder=' Time'
                    value={this.state.time}
                    onChange={e => this.setState({ time: e.target.value })} />
                <br />
                <br />

                <button onClick={e => this.onSubmit(e)}> Submit</button>
            </form>

        );
    }

}

export default Form;
