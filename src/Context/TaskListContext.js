import React, {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
// import {uuid} from "uuid";

//creating the tasklist context...
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    

    //setting stored values from local storage to the react state
    const initialState = JSON.parse(localStorage.getItem('tasks'))  || []

    const [tasks, setTasks] = useState(initialState)

    //setting to local storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, {title: title, id:uuidv4()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        if(window.confirm("Are you sure you want to clear the list"))
        setTasks([])
        
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (
            (task.id === id  ? {title, id} : task)
        ))

        setTasks(newTasks)
        setEditItem(null);
    }

    
    
    return(
        <TaskListContext.Provider value={{tasks, addTask, deleteTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )

}

export default TaskListContextProvider