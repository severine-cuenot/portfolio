/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import './style.scss';

function AccordionContent({ experience, onToggle, active }) {
  const { title, content } = experience;
  // Transform row html in JSON to "real" html. Merci ChatGPT !
  const createMarkup = () => ({ __html: content });

  return (
    <li className={`accordion__item ${active ? 'active' : ''}`}>
      <button className="button__accordion" type="button" onClick={onToggle}>
        {title}
        <span className="accordion__picto">{active ? '▼' : '►'}</span>
      </button>
      <div className={`answer_wrapper ${active ? 'open' : ''}`}>
        <div className="accordion__content" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </li>
  );
}

AccordionContent.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default AccordionContent;
