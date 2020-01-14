import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={'/edit/'+props.todo._id}>Edit</Link>
        </td>
    </tr>
)
export default class TodosList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(function(err){
                console.log(err);
            })
    }

    todoList(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i}/>;
        });
    }

    render(){
        return (
            <div>
                <h2 style={{marginTop:20}}>To Dos List</h2>
                <table className="table table-striped table-hover" style={{marginTop:20}}>
                    <thead className="thead thead-dark">
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}