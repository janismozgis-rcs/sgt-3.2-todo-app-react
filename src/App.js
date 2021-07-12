import 'bootstrap/dist/css/bootstrap.css';
import NewTaskForm from './Components/NewTaskForm';
import TasksList from './Components/TasksList';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>My Tasks</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TasksList />
                </div>
            </div>
            <NewTaskForm />
        </div>
    );
}

export default App;
