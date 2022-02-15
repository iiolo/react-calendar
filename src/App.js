import './App.css';
import Calendar from './Calendar';
import Header from './Header';
function App() {
    return (
        <div className="layout">
            <div className="app-container">
                <Header />
                <Calendar />
            </div>
        </div>
    );
}

export default App;
