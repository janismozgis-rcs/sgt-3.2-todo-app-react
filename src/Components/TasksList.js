import { useState, useEffect } from "react";
import Task from './Task';

function TasksList() {
    const [tasks, setTasks] = useState({
        loading: true,
        items: [],
    });

    useEffect(() => {
        setInterval(() => {
            // backend data received
            setTasks({
                loading: false,
                items: [
                    {_id: '1111', title: 'Task 1', isCompleted: false},
                    {_id: '2222', title: 'Task 2', isCompleted: false},
                    {_id: '3333', title: 'Task 3', isCompleted: true},
                ]
            });
        }, 2000);
    }, [])

    let content = <h5>Loading...</h5>
    if (!tasks.loading) {
        const taskElements = tasks.items.map((task, index) => <Task task={task} key={index} />)

        content = (
            <ul className="list-group">
                {taskElements}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default TasksList;