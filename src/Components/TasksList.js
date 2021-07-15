import axios from "axios";
import { useState, useEffect } from "react";
import Task from './Task';

function TasksList({counter, reloadTaskList}) {
    const [tasks, setTasks] = useState({
        loading: true,
        items: [],
    });

    const loadTasks = async () => {
        setTasks({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8071/tasks';
            const response = await axios.get(url);
            setTasks({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong');
            setTasks({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadTasks();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!tasks.loading && tasks.items.length == 0) {
        content = <h5>No tasks added</h5>
    } else if (!tasks.loading) {
        const taskElements = tasks
            .items
            .map((task, index) => <Task 
                task={task} 
                key={index} 
                reloadTaskList={reloadTaskList} 
            />)

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