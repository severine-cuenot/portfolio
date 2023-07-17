/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import './style.scss';

function OneWork({ work }) {
  const {
    title, context, img, text, tools, link,
  } = work;
  // Transform row html in JSON to "real" html. Merci ChatGPT !
  // const createMarkup = () => ({ __html: content });
  // const createMarkupForDate = () => ({ __html: date });
  // const createMarkupForJob = () => ({ __html: job });
  return (
    <li>
      <div>
        {img}
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
