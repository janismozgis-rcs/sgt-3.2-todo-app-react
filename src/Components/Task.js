import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function Task({task}) {

    let deleteBtn = ''
    if (task.isCompleted) {
        deleteBtn = (
            <button className="btn btn-danger float-end">
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        )
    }

    return (
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" checked={task.isCompleted} />
            {task.title}
            {deleteBtn}
        </li>
    )
}

export default Task;