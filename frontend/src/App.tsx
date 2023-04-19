import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMeme from './components/AddMeme';
import ListMeme from './components/ListMeme';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddMeme />}/>
        <Route path="/meme" element={<ListMeme />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
