import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Proposal from './pages/Proposal';
import InWork from './pages/InWork';
import Offer from './pages/Offer';
// import Completed from './pages/Completed';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/inwork" element={<InWork />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
