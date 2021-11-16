import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path='/' exact element={<MainEntry />} />

        <Background>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/history' element={<History />} />
            <Route path='/gallery' exact element={<Gallery />} />
            <Route path='/gallery/:selected/:id' element={<ImageDetail />} />
            <Route path='/worldcup' element={<Tournament />} />
            <Route path='/music' element={<Music />} />
            {/* 어떠한 URL로도 이동할 수 없을 때 띄울 에러페이지 */}
            <Route element={<PageNotFound />} />
          </Routes>
        </Background>
      </Suspense>
    </>
  );
}

export default App;
