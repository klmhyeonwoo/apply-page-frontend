import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index'
import GlobalStyles from './styles/GlobalFont';
import Common from './component/Common';
import Frontend from './component/position/Frontend';
import Design from './component/position/Design';
import Backend from './component/position/Backend';
import ScrollToTop from './hooks/ScrollToTop';
import Admin from './component/admin/Index';
import Main from './component/admin/partition/Main';
import Fail from './component/admin/partition/Fail';
import Pass from './component/admin/partition/Pass';

export interface WrapperProps {
  children: React.ReactNode;
  name?: string;
  text?: string;
  imgSrc?: string;
  alt?: string;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/common' element={<Common />} />
          <Route path='/frontend' element={<Frontend />} />
          <Route path='/backend' element={<Backend />} />
          <Route path='/design' element={<Design />} />

          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/main' element={<Main />} />
          <Route path='/admin/pass' element={<Pass />} />
          <Route path='/admin/fail' element={<Fail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
