import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasklistContextProvider from './Context/TaskListContext'
import TaskList from './Components/TaskList'
import Header from './Components/Header'
import TaskForm from './Components/TaskForm'

function App() {
  return (
    <TasklistContextProvider>
      <div className="App">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TasklistContextProvider>
  );
}

export default App;
