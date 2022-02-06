import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Account from './pages/Account';
import Savings from './pages/Account/Savings';
import PrivateRoute from './components/routes/PrivateRoute';
// import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard" element={(<PrivateRoute><Dashboard /></PrivateRoute>)} />
        <Route path="account" element={(<PrivateRoute><Account /></PrivateRoute>)}>
          <Route index element={(<PrivateRoute><Savings /></PrivateRoute>)} />
          <Route path="savings" element={(<PrivateRoute><Savings /></PrivateRoute>)} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
