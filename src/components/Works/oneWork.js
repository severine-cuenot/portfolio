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
      <div>
        {title} {context} {text} {tools} {link}
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
    tools: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneWork;
