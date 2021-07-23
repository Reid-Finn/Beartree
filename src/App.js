import HomePage from './Components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import About from './Components/AboutUs';
import Quality from './Components/Quality';
import Contact from './Components/Contact';
import Quote from './Components/Quote';



function App() {
  return (
    <Router>
      <NavBar />
    <div className="App">
    <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={About} />
        <Route path='/OurQuality' exact component={Quality} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/Quote' exact component={Quote} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;