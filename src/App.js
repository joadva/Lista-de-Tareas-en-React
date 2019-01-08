import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';




class App extends Component {
    constructor (){
        super();

        this.state = {
            todos

        }


    } 

    render() {
        const todos = this.state.todos.map((todo, i)=>{
            return (
         <div className = "col-md-4" >
               
                <div className = "card mt-4" >
               
                <div className = "card-header" >
                <h2>{todo.title} </h2>
                <spam className="badge badge-pill badge-danger ml-2">
                {todo.priority} </spam>
                </div>
                <p>{todo.description}</p>
                <p> <mark> {todo.responsible} </mark></p>

                </div>

                </div>

                )
        })

        return ( 
            <div className = "App" >
            <nav className="navbar navbar-gray bg-dark">
        <a href="" className="text-white bold">
     Tareas
     <spam className="badge badge-pill badge-light ml-2">
                {this.state.todos.length} </spam>

        </a>
        </nav>
         <div className = "container" >
               
                <div className = "row mt-4" >
               
             {todos}

                </div>

                </div>

       

            <img src = { logo }className = "App-logo" alt = "logo" / >
            


            </div>

        );
    }
}

export default App;