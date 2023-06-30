import PropTypes from 'prop-types';
import './style.scss';

function AccordionContent({ experience, onToggle, active }) {
  const { title, content } = experience;
  // console.log(experience);
  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className="button" type="button" onClick={onToggle}>
        {title}
        <span className="control">{active ? '—' : '+'}</span>
      </button>
      <div className={`answer_wrapper ${active ? 'open' : ''}`}>
        <div className="answer">{content}</div>
      </div>
    </li>
  );
}

AccordionContent.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default AccordionContent;
