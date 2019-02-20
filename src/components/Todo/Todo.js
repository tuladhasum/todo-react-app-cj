import React, { Component } from 'react'

import {Header, Button, Divider, Icon} from 'semantic-ui-react';
import '../../App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(){
    super();

    this.state = {
      message: "React JS Todo List",
      newTodo: '',
      todos: [{
        title: 'Buy Toilet paper',
        done: false
      },{
        title: 'Buy Face Wash',
        done: false
      }]
    };
  }

  newTodoChanged(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  formSubmitted(e){
    e.preventDefault();
    this.setState({
      newTodo: '',
      //Create new array and append the new one in the end
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(e, index){
    console.log(e.target.checked);

    // Make a shallow copy of the todos from the state
    const todos = [...this.state.todos]; // Copy the array
    // Make a shallow copy of the new todo and change it into object
    todos[index] = {...todos[index]}; // Copy the todo
    todos[index].done = e.target.checked; // update done property on copied todo
    // We are doing the above so that we are not mutating the state.
    // Giving react a copy of the state with the latest update so to allow 
    // change appropriately

    this.setState({
      todos
    });

  }

  removeTodo(index){
    const todos = [...this.state.todos]; //Copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone(){
    const todos = this.state.todos.map(todo=>{
      return {
        ...todo,
        done: true
      }
    });

    this.setState({
      todos
    });
  }

  allRemaining(){
    const todos = this.state.todos.map(todo=>{
      return {
        title: todo.title, // can also do ...todo (useful for big objects)
        done: false
      }
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <Header content={this.state.message} as="h2" icon="list alternate" />

        <NewTodoForm 
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)} 
          newTodoChanged={this.newTodoChanged.bind(this)} />

        <Divider horizontal>
          <Header as='h4'> <Icon name='tag' /> Current Todo List </Header>
        </Divider>

        <Button.Group size="mini"> 
          <Button onClick={()=>this.allDone()} color="green">All Done</Button>
          <Button onClick={()=>this.allRemaining()} color="red">All Remaining</Button>
        </Button.Group>

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
        
      </div>
    )
  }
}
