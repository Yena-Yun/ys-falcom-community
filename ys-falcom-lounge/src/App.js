import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainEntry from './pages/MainEntry';
import Home from './pages/Home';
import History from './pages/History';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={MainEntry} />
        <Route path='/home' component={Home} />
        <Route path='/history' component={History} />
        <Route path='/gallery' component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
