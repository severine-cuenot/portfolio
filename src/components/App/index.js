// == Import
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useScrollTop from '../../hooks/useScrollTop';

// import pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Experience from '../../pages/Experience';
import Works from '../../pages/Works';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/404';

// import components
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';

// import style
import './styles.scss';

// == Composant
function App() {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcours" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/realisations" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
