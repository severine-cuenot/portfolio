/* eslint-disable import/no-unresolved */
// == Import
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useScrollTop from '../../hooks/useScrollTop';

// import pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Experience from '../../pages/Experience';
import Realisations from '../../pages/realisations';
<<<<<<< HEAD
import Contact from '../../pages/contact';
import Credits from '../../pages/credits';
=======
import Contact from '../../pages/Contact';
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
import NotFound from '../../pages/404';

// import components
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';

// import style
import './styles.scss';

// == Composant
function App() {
  useScrollTop();

  // Change font
  const [isFontChanged, setFontChange] = useState(false);
  const handleChangeFont = () => {
    setFontChange(!isFontChanged);
  };

  return (
    <div className="app">
<<<<<<< HEAD
      <div className={`app ${isFontChanged ? 'changed-font' : 'default-font'}`}>
        <AppHeader isFontChanged={isFontChanged} handleChangeFont={handleChangeFont} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AppFooter />
      </div>
=======
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcours" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AppFooter />
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
    </div>
  );
}

// == Export
export default App;
