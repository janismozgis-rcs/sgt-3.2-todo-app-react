import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function Task({task, reloadTaskList}) {
    const [taskCompleted, setTaskCompleted] = useState(task.isCompleted);
    const [checkboxDisabled, setCheckboxDisabled] = useState(false);
    const [deletingTask, setDeletingTask] = useState(false);

    const toggleComletion = async () => {
        setCheckboxDisabled(true);
        const data = {
            title: task.title,
            lables: task.lables,
            isCompleted: !taskCompleted,
        };
        const url = `http://localhost:8071/tasks/${task._id}`;
        try {
            await axios.put(url, data);
            setTaskCompleted(!taskCompleted);
            setCheckboxDisabled(false);
        } catch(e) {
            alert('Whoops, something went wrong');
        }
    }

    const deleteTask = async () => {
        setDeletingTask(true);
        const url = `http://localhost:8071/tasks/${task._id}`;
        try {
            await axios.delete(url);
            reloadTaskList();
        } catch(e) {
            alert('Whoops, something went wrong');
        }
    }

    let deleteBtn = ''
    if (taskCompleted) {
        let buttonContent = <FontAwesomeIcon icon={faTrashAlt} />;
        if (deletingTask) {
            buttonContent = <FontAwesomeIcon icon={faSpinner} spin />;
        }

        deleteBtn = (
            <button className="btn btn-danger float-end" disabled={deletingTask} onClick={deleteTask} >
                {buttonContent}
            </button>
        )
    }

    return (
        <li className="list-group-item">
            <input 
                className="form-check-input me-1" 
                type="checkbox" 
                checked={taskCompleted}
                disabled={checkboxDisabled}
                onChange={toggleComletion}
            />
            {task.title}
            {deleteBtn}
        </li>
    )
}

export default Task;