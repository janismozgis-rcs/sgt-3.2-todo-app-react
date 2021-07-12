import 'bootstrap/dist/css/bootstrap.css';
import NewTaskForm from './Components/NewTaskForm';

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
                    <ul className="list-group">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" />
                            First checkbox
                        </li>
                    </ul>
                </div>
            </div>
            <NewTaskForm />
        </div>
    );
}

export default App;
