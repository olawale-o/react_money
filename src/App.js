import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Register} exact />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
