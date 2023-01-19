import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index'
import GlobalStyles from './styles/GlobalFont';
import Common from './component/Common';

export interface WrapperProps {
  children: React.ReactNode;
  name?: string;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='common' element={<Common />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
