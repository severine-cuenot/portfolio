// import { Link } from 'react-router-dom';
import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__logo">
          {/* <Link to="/">
            <Logo />
          </Link> */}
          <p className="footer__desc">
            Monté à la sueur de mon front avec React.
          </p>
        </div>
      </div>
      <p className="footer__copyright">&copy; Séverine Cuenot{year}</p>
    </footer>
  );
}

export default AppFooter;
