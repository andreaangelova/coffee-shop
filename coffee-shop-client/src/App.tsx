import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistedStore} from './store/store';
import Header from './layouts/Header';
import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const SelectedProduct = lazy(() => import('./pages/SelectedProduct'));

function App() {
  return (
    <div>
      <Header/>
        <Suspense fallback={<h1>Loading...</h1>}>
        {/* TODO: add Loading component /> */}
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SelectedProduct />} />
              {/* TODO: add not found page <Route path="*" element={<NoPage />} /> */}
            </Routes>
          </PersistGate>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
