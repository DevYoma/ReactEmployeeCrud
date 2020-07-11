import React, {useContext} from 'react';
import {TaskListContext} from '../Context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    return ( 
        <div className="tasklist">
            {tasks.length ? 
            (<ul >
            {tasks.map(task => {
                return <Task  task={task} key={task.id}/>
            })}
        </ul>) : ("NO TASK. Hello free time"    )
        }
            
        </div>

     );
}
 
export default TaskList;