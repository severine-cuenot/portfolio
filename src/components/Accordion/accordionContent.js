import PropTypes from 'prop-types';
import './style.scss';

function AccordionContent({ experience }) {
  const { title, content } = experience;
  // console.log(experience);
  return (
    <li className="accordion_item">
      <button className="button" type="button">
        {title}
        <span className="control">—</span>
      </button>
      <div className="answer_wrapper">
        <div className="answer">{content}</div>
      </div>
    </li>
  );
}

AccordionContent.propTypes = {
  experience: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default AccordionContent;
