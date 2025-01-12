import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import NewThreads from './components/NewThreads';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threads/new" element={<NewThreads />} />
          <Route path="/threads/:thread_id" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
