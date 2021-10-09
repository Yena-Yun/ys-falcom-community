import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
