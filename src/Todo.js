import React, { Component } from "react";
import "./TodoList.css"


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.modif = this.modif.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.completed = this.completed.bind(this)
    }


    handleRemove() {
        this.props.remove(this.props.id)
    }

    modif() {
        this.props.modify(this.props.id)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
        // console.log(this.state.text)
    }

    handleEdit(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.text)
        console.log(this.state.text)

    }

    completed() {
        this.props.completed(this.props.id)

    }

    render() {
        return (
            <div className="Todo-row">
                {!this.props.isEditing && <div className="Todo-start" onClick={this.completed} style={{ textDecoration: `${this.props.isCompleted ? "line-through" : ''}` }}>{this.props.text}</div>}
                <div className="Todo-btns-end">
                    {!this.props.isEditing ? <button onClick={this.modif} className="fa-solid fa-pen"></button> :
                        <form onSubmit={this.handleEdit} className="Todo-edit-form">
                            <input className="Todo-input" defaultValue={this.props.text} name="text" onChange={this.handleChange} />
                            <button className="Todo-btn-form">Save</button>
                        </form>}
                    {!this.props.isEditing && <button className="fa-solid fa-trash" onClick={this.handleRemove}></button>}
                </div>

            </div>
        )
    }
}

export default Todo;