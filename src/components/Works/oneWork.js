import PropTypes from 'prop-types';
import './style.scss';
import Button from '../Button';

function OneWork({ work }) {
  const {
    title, context, img, text, tools, link, role, label,
  } = work;

  // is there a link available or not
  const buttonAvailable = link !== '';

  return (
    <li className="work__pannel">
      <div className="work__img" style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
        <img src={`../../img/${img}`} alt={`${title}`} title={`${title}`} className="work__img--src" />
      </div>

      <div className="work__description">
        <div className="work__title">{title}</div>
        <div className="work__context">{context}</div>
        <div className="work__role">Casquette(s)&nbsp;: {role}</div>
        <div className="work__content">{text}</div>
        {/* Show button if link is not empty */}
        {buttonAvailable && (
        <div className="work__link">
          <a href={link} target="_blank" rel="noreferrer"><Button label={`${label}`} /></a>
        </div>
        )}
        <p className="work__tools--title">Outils utilisés&nbsp;:</p>
        <div className="work__tools">{tools}</div>
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
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneWork;
