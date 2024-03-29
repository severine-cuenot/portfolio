/* eslint-disable import/no-unresolved */
// == Import
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useScrollTop from '../../hooks/useScrollTop';

// import pages
import Home from '../../pages/home';
import About from '../../pages/about';
import Experience from '../../pages/experience';
import Realisations from '../../pages/realisations';
import Contact from '../../pages/contact';
import Credits from '../../pages/credits';
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

  // const [dateState, setDateState] = useState(new Date());
  // // Add 2 months to current date
  // const months = 2;
  // dateState.setMonth(dateState.getMonth() + months);

  // // Refresh DOM every 10 min
  // useEffect(() => {
  //   const interval = setInterval(() => setDateState(new Date()), 600000);
  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);

  return (
    <div className="app">
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
    </div>
  );
}

// == Export
export default App;
