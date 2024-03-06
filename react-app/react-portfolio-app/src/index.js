import './css/index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from './components/layout/Layout';
import { Profile } from './components/pages/Profile';
import { Portfolio } from './components/pages/Portfolio';
import { Main } from './components/pages/Main';

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='profile' element={<Profile />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
} /// App //

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);