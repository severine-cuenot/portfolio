import PropTypes from 'prop-types';
import './style.scss';

function OneWork({ work }) {
  const {
    title, context, img, text, tools, link,
  } = work;

  return (
    <li className="work__pannel">
      <div className="work__img">
        <img src={`../../img/${img}`} alt={`${title}`} className="work__img--src" />
      </div>
      <div className="work__description">
        <div className="work__title">{title}</div>
        <div className="work__context">{context}</div>
        <div className="work__content">{text}</div>
        <div className="work__tools">{tools}</div>
        <div className="work__link"><a href={link}>Voir la créa</a></div>
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
  }).isRequired,
};

export default OneWork;
