import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.add(this.state)
        this.setState({ text: '' })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })





    }
    render() {
        return (
            <form className="Todo-form" onSubmit={this.handleSubmit}>
                <label className="Todo-label" htmlFor="input">New Todo</label>
                <br />
                <input
                    className="Todo-input"
                    id="input"
                    type='text'
                    name='text'
                    value={this.state.text}
                    placeholder='New Todo'
                    onChange={this.handleChange}
                />
                <button className="Todo-btn-form" >ADD TODO</button >
            </form>
        )
    }
}

export default TodoForm;