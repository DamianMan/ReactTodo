import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';

import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                { id: uuidv4(), text: 'super market', isEditing: false, isCompleted: false },
                { id: uuidv4(), text: 'Car insurance', isEditing: false, isCompleted: false }
            ]
        };
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.modify = this.modify.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.editCompleted = this.editCompleted.bind(this)
    }

    toggleEdit() {
        // this.setState(st => (
        //     st.toDoList.map(m => {
        //         if (m.id === id) return { ...st.toDoList, isEditing: true }
        //     })
        // ))
        console.log('edit')
    }

    removeTodo(id) {
        this.setState(st => (
            { toDoList: st.toDoList.filter((todo) => todo.id !== id) }
        ))
    }
    addTodo(item) {
        let newItem = { ...item, id: uuidv4(), isEditing: false, isCompleted: false }
        this.setState(st => (
            { toDoList: [...st.toDoList, newItem] }
        ))
    }

    modify(id) {
        this.setState(st => (
            {
                toDoList: st.toDoList.map((m) => {
                    if (m.id === id) return { ...m, isEditing: true }
                    else return m
                })
            }
        ))
    }

    editTodo(id, newText) {
        this.setState(st => (
            {
                toDoList: st.toDoList.map((m) => {
                    if (m.id === id) return { ...m, text: newText, isEditing: false, isCompleted: false }
                    else return m
                })
            }
        ))

    }

    editCompleted(id) {
        this.setState(st => (
            {
                toDoList: st.toDoList.map((m) => {
                    if (m.id === id) return { ...m, isCompleted: !m.isCompleted }
                    else return m
                })
            }
        ))

    }

    render() {
        let toDoList = this.state.toDoList.map((m, i) => <div className="Todo" key={i}>
            <Todo
                key={m.id}
                text={m.text}
                id={m.id}
                remove={this.removeTodo}
                isEditing={m.isEditing}
                modify={this.modify}
                edit={this.editTodo}
                completed={this.editCompleted}
                isCompleted={m.isCompleted}
            />
        </div>)
        return (
            <div className="Todolist-cont">
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App.</p>
                <hr className="Todo-hr" />
                {toDoList}
                <TodoForm add={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;