import './css/index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import { Layout } from './components/layout/Layout';

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='main' element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
} /// App //

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);