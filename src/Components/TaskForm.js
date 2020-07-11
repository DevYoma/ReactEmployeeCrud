import React, {useContext, useState, useEffect} from 'react';
import {TaskListContext} from '../Context/TaskListContext';

const TaskForm = () => {
    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);

    const[title,setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(editItem === null){
            addTask(title)
            setTitle("")
        }
        else{
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if (editItem !== null){
            setTitle(editItem.title)
            console.log(editItem);
        }
        else{
            setTitle("")
        }
    },[editItem])

    return ( 
        <div>
            <form className="taskform" onSubmit={handleSubmit} style={{marginBottom:"48px", }}>
                <input className="taskform__input" onChange={handleChange} value={title} type="test" placeholder="Add task.." required  />
                <div className="action__buttons">
                    <button className="submit__button" type="submit">
                        {editItem ? "Edit Task" : "Add Task"}
                    </button>
                    <button className="clear__button" type="submit" onClick={() => clearList()}>Clear tasks</button>
                </div>
            </form>
        </div>
     );
}
 
export default TaskForm;