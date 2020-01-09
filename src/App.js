import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateTodo from './components/create-todo.component';
import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';

import logo from './logo.png';

function App() {
    return (
        <Router>
            <div className="container">
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://github.com/kirstenmay" target="_blank">
                        <img src={logo} width="30" height="30" alt="Kirstens gtihub"/>
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack To Do App</Link>
                    <div className="nav-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">To Do</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">+To Do</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/" exact component={TodosList}/>
                <Route path="/edit/:id" component={EditTodo}/>
                <Route path="/create" component={CreateTodo}/>
            </div>
        </Router>
        );
    }

    export default App;