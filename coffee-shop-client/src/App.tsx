import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './layouts/Header';
import Home from './pages/Home';
import SelectedProduct from './pages/SelectedProduct';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SelectedProduct />} />
        {/* TODO: add not found page <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
