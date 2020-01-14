import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props){
        super(props);

        //GET ACCESS TO THE STATE WITHIN THE METHODS
        this.onChangeTodoDescrition = this.onChangeTodoDescrition.bind(this);
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

    //METHODS
    onChangeTodoDescrition(e){
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }
    //SUBMIT METHOD
    onSubmit(e){
        //PREVENT THE DEFAULT BEHAVIOR OF THE SUBMIT ACTION
        e.preventDefault();

        //SUBMIT FORM LOGIC
        console.log(`Form submitted:`)
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Responsible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.todo_completed}`)

        //SET A CONST TO THE DATA THE USER SUBMITTED
        const newTodo = {
            todo_description: this.state.todo_description, 
            todo_responsible: this.state.todo_responsible, 
            todo_priority: this.state.todo_priority, 
            todo_completed: this.state.todo_completed
        }

        //USE AXIOS TO MAKE THE API CALL TO OUR BACKEND/SEND DATA
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        //RESET THE STATE TO BLANK
        this.setState({
            todo_description: '', 
            todo_responsible: '',
            todo_priority: '', 
            todo_completed: false
        })
    }

    render(){
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New To Do</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.todo_description} 
                            onChange={this.onChangeTodoDescrition}/>
                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.todo_responsible} 
                            onChange={this.onChangeTodoResponsible}/>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority === 'Medium'}
                                onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority === 'High'}
                                onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="+To Do" className="btn btn-info"/>
                    </div>
                </form>
            </div>
        )
    }
}