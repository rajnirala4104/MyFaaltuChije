// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Home } from './pages';
import { ProductPopupFormContext } from './contaxt';

const App: React.FC = () => {

  const [productPopupFormOnOff, setProductPopupFormOnOff] = useState(false);

  return (
    <ProductPopupFormContext.Provider value={{ productPopupFormOnOff, setProductPopupFormOnOff }}>
      <Router>
        <div className="">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ProductPopupFormContext.Provider>
  );
};

export default App;
