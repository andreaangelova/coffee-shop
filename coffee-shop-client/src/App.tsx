import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './layouts/Header';
const Home = lazy(() => import('./pages/Home'));
const SelectedProduct = lazy(() => import('./pages/SelectedProduct'));

function App() {
  return (
    <div>
      <Header/>
        <Suspense fallback={<h1>Loading...</h1>}>
        {/* TODO: add Loading component /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SelectedProduct />} />
          {/* TODO: add not found page <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
