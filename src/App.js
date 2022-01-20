import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/authentication/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
      </Routes>
    </div>
  );
}

export default App;
