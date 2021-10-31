import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import MainEntry from './pages/MainEntry';
import PageNotFound from './pages/PageNotFound';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ImageDetail = lazy(() => import('./pages/ImageDetail'));
const Tournament = lazy(() => import('./pages/Tournament'));
const Music = lazy(() => import('./pages/Music'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path='/' exact component={MainEntry} />

        <Background>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/history' component={History} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/gallery/:selected/:id' component={ImageDetail} />
            <Route path='/worldcup' component={Tournament} />
            <Route path='/music' component={Music} />
            {/* 어떠한 URL로도 이동할 수 없을 때 띄울 에러페이지 */}
            <Route component={PageNotFound} />
          </Switch>
        </Background>
      </Suspense>
    </>
  );
}

export default App;
