import React, { Component } from 'react';
import TodoList from './Components/List'
import Navbar from './Components/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TodoList />
        
      </div>
    );
  }
}

export default App;
