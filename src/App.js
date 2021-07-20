import HomePage from './Components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
            <Route path='/' exact component={HomePage} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
