import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import NewThreads from './components/NewThreads';

function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=10')
      .then(response => response.json())
      .then(data => {
        setThreads(data)
      })
  }, [])

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
