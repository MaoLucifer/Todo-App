import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';
import './components/TodoItem';
import './components/AddTodo';
import './App.css';
import $ from 'jquery';

  // Dark Mode
  function darkMode() {

    var switchStatus = false;
    $("#togBtn").on('change', function() {
      if ($(this).is(':checked')) {
          switchStatus = $(this).is(':checked');
          $('body').css({
            'backgroundColor' : '#1a1919'
          });
          $('h2').css({
            'textShadow' : '0 2px 15px rgba(0, 0, 0, 1)'
          });
          $('.form__container').css({
            'backgroundColor' : 'rgba(26, 25, 25, 1)',
            'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)'
          });
          $('.form__input').css({
            'color' : 'white',
            'backgroundColor' : 'rgba(26, 25, 25, 1)',
            'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)'
          });
          $('.todo__item').css({
            'color' : 'white',
            'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)',
            'backgroundColor' : 'rgba(26, 25, 25, 1)'
          });
          $('#darkmode__label').css({
            'color' : 'white'
          });
      }
      else {
        switchStatus = $(this).is(':checked');
        $('body').css({
          'backgroundColor' : 'white'
        });
        $('h2').css({
          'textShadow' : 'none'
        });
        $('.form__container').css({
          'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)'
        });
        $('.form__input').css({
          'color' : 'black',
          'backgroundColor' : 'white',
          'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)'
        });
        $('.todo__item').css({
          'color' : 'black',
          'boxShadow' : '0px 2px 7px 0px rgba(0, 0, 0, 0.5)',
          'backgroundColor' : 'white'
        });
        $('#darkmode__label').css({
          'color' : '#1e1919'
        });
      }
    });
  };

  class App extends Component {
    state = {
      todos: []
  }

  // Placeholder
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo 
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false 
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
        <div className="App">
          <Switch
              onClick={darkMode}
              id="togBtn"
              className="togBtn"
          />
          <span id="darkmode__label">Dark Mode</span>
          <div className="container">
            {/* <Header /> */}
            <h2>Just Do It</h2>
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo}
              />
            </React.Fragment>
          </div>
        </div>
    );
  }
}

export default App;
