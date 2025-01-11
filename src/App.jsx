import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import NewThreads from './components/NewThreads';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threads/new" element={<NewThreads />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
