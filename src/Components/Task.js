import React, {useContext} from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const Task = ({task}) => {

    const {deleteTask, findItem} = useContext(TaskListContext);

    return ( 
        <li style={{listStyle:"none"}}>
            <span>{task.title}</span>
            <div>
               <button onClick={() => findItem(task.id)}>Edit</button>
               <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
     );
}
 
export default Task;