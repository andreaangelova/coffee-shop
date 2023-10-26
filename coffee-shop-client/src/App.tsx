import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './layouts/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* TODO: add not found page <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
