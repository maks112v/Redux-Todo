import React, { Component } from 'react';
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact';

import TodoList from './Components/List'
import Navbar from './Components/Navbar'
import TaskForm from './Components/NewTask'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol className='my-5'>
              <TodoList />
            </MDBCol>
            <TaskForm />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
