// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__text">
        <p>
          Monté à la sueur de mon front (mais avec beaucoup de plaisir)
          avec React.js et mon cher VS Code.<br />
          <Link to="/credits">Crédits.</Link>
        </p>
      </div>
      <div className="footer__copyright">
        <p>Tous droits réservés &copy; Séverine Cuenot {year}</p>
      </div>
    </footer>
  );
}

export default AppFooter;
