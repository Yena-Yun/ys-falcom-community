import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainEntry from './pages/MainEntry';
import Home from './pages/Home';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Tournament from './pages/Tournament';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={MainEntry} />
        <Route path='/home' component={Home} />
        <Route path='/history' component={History} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/tournament' component={Tournament} />
      </Switch>
    </div>
  );
}

export default App;
