import { useState } from 'react';
import ReactHowler from 'react-howler';
import { Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import MainEntry from './pages/MainEntry';
import Home from './pages/Home';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Tournament from './pages/Tournament';
import Music from './pages/Music';
import ImageDetail from './pages/ImageDetail';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      {/* <ReactHowler src={BackgroundMusic} playing={false} /> */}
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
    </>
  );
}

export default App;
