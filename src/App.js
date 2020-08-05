import React, {Component} from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Footer from './Components/Footer';

class App extends Component {
  constructor(){
    super()
    this.state={
      todos:[
      ]
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo = (id) => {
    let filteredTodos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos: filteredTodos
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let updatedTodos = [...this.state.todos, todo]
    this.setState({
      todos: updatedTodos
    })
  }


  render(){
    return(
      <div className='container'>
        <h1 className='center cyan-text text-lighten-2'>Your Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo  addTodo={this.addTodo}/>
        <Footer />
      </div>
    )
  }
}

export default App;
