import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Account from './pages/Account';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard" element={(<PrivateRoute><Dashboard /></PrivateRoute>)} />
        <Route path="/account" element={(<PublicRoute><Account /></PublicRoute>)} />
      </Routes>
    </div>
  );
}

export default App;
