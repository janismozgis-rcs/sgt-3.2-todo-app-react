import { useState } from "react";

function NewTaskForm() {
    const [saving, setSaving] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskName = (event) => {
        setNewTaskName(event.target.value);
    }

    const createNewTask = () => {
        if (newTaskName == '') {
            alert('Please fill the new task name!');
            return;
        }

        setSaving(true);

        setTimeout(() => {
            // todo sent stuff to server
            setSaving(false);
            setNewTaskName('');
        }, 2000);
    }

    let inputField = <input className="form-control" value={newTaskName} onChange={updateNewTaskName} />
    let submitBtn = (
        <button className="btn btn-primary mt-3" onClick={createNewTask}>
            Add new todo
        </button>
    )
    if (saving) {
        inputField = <input disabled={true} className="form-control" value={newTaskName} onChange={updateNewTaskName} />
        submitBtn = (
            <button className="btn btn-primary mt-3 disabled" onClick={createNewTask} disabled={true}>
                Saving...
            </button>
        )
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                    <h3>New todo</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <label>Task name:</label>
                </div>
                <div className="col-10">
                    {inputField}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {submitBtn}
                </div>
            </div>
        </div>
    )
}

export default NewTaskForm;