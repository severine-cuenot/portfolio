// import { Link } from 'react-router-dom';
import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__text">
        <p>
          Monté à la sueur de mon front (mais avec beaucoup de plaisir)
          avec React.js et mon cher VS Code.
        </p>
      </div>
      <div className="footer__copyright">
        <p>&copy; Séverine Cuenot {year}</p>
      </div>
    </footer>
  );
}

export default AppFooter;
