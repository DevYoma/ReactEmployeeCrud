import React, {useContext} from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const Task = ({task}) => {

    const {deleteTask, findItem} = useContext(TaskListContext);

    return ( 
        <li className="list" style={{listStyle:"none"}}>
            <span className="listName" style={{marginRight:"20px", marginTop:"4px"}}>{task.title}</span>
            <span>
               {/* <button onClick={() => findItem(task.id)}>Edit</button> */}
               <button className="clear__button" id="clearButtonFlex" onClick={() => deleteTask(task.id)}>Delete</button>
            </span>
        </li>
     );
}
 
export default Task;