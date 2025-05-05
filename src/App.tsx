import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/sobre';
import Contato from './Pages/Contato';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default App;
