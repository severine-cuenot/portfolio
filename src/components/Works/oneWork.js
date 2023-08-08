import PropTypes from 'prop-types';
import './style.scss';
import Button from '../Button';

function OneWork({ work }) {
  const {
<<<<<<< HEAD
    title, context, img, text, tools, link, role, label,
  } = work;

  // is there a link available or not
  const buttonAvailable = link !== '';

  return (
    <li className="work__pannel">
      <div className="work__img" style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
        <img src={`../../img/${img}`} alt={`${title}`} title={`${title}`} className="work__img--src" />
      </div>

=======
    title, context, img, text, tools, link, role,
  } = work;

  return (
    <li className="work__pannel">
      <div className="work__img">
        <img src={`../../img/${img}`} alt={`${title}`} title={`${title}`} className="work__img--src" />
      </div>
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
      <div className="work__description">
        <div className="work__title">{title}</div>
        <div className="work__context">{context}</div>
        <div className="work__role">Casquette(s)&nbsp;: {role}</div>
        <div className="work__content">{text}</div>
<<<<<<< HEAD
        {/* Show button if link is not empty */}
        {buttonAvailable && (
        <div className="work__link">
          <a href={link} target="_blank" rel="noreferrer"><Button label={`${label}`} /></a>
        </div>
        )}
        <p className="work__tools--title">Outils utilisés&nbsp;:</p>
        <div className="work__tools">{tools}</div>
=======
        <p className="work__tools--title">Outils utilisés&nbsp;:</p>
        <div className="work__tools">{tools}</div>
        <div className="work__link">
          <a href={link}><Button label="Voir la créa_" />
          </a>
        </div>
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
      </div>
    </li>
  );
}

OneWork.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
<<<<<<< HEAD
    label: PropTypes.string.isRequired,
=======
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
  }).isRequired,
};

export default OneWork;
