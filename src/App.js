import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
      </Routes>
    </div>
  );
}

export default App;
