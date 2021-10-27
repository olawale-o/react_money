import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Authentication/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Authentication/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Register} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </div>
  );
}

export default App;
