import './App.css';
import Dashboard from './layouts/Dashboard';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      
      <Dashboard>
        <Home/>
      </Dashboard>
    </div>
  );
}

export default App;
