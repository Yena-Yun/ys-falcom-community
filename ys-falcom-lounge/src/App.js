import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainEntry from './pages/MainEntry';
import Home from './pages/Home';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Tournament from './pages/Tournament';
import Record from './pages/Record';
import PostDetail from './pages/PostDetail';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={MainEntry} />
        <Route path='/home' component={Home} />
        <Route path='/history' component={History} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/gallery/:series/:id' component={PostDetail} />

        {/* <Route path='/gallery/:selected/:id' component={PostDetail} /> */}
        <Route path='/worldcup' component={Tournament} />
        <Route path='/music' component={Record} />
        {/* 어떠한 URL로도 이동할 수 없을 때 띄울 에러페이지 */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
