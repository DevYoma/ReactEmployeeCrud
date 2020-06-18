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
            <form onSubmit={handleSubmit} style={{marginBottom:"48px", }}>
                <input onChange={handleChange} value={title} type="test" placeholder="Add task.." required style={{marginBottom:"16px"}} />
                <div>
                    <button type="submit">
                        {editItem ? "Edit Task" : "Add Task"}
                    </button>
                    <button type="submit" onClick={() => clearList()}>Clear</button>
                </div>
            </form>
        </div>
     );
}
 
export default TaskForm;