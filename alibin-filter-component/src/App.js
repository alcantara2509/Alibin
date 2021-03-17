import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Sales, InProgress } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route path="/dashboard" component={InProgress} />
      <Route path="/clients" component={InProgress} />
    </Switch>
  );
}

export default App;
