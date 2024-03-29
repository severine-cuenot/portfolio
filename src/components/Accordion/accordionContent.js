/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import './style.scss';

function AccordionContent({ experience, onToggle, active }) {
  const {
    title, content, date, job, tools,
  } = experience;
  // Transform row html in JSON to "real" html. Merci ChatGPT !
  const createMarkup = () => ({ __html: content });
  // Are tools available?
  const toolsAvailable = tools.length > 0;

  return (
    <li className={`accordion__item ${active ? 'active' : ''}`}>
      <button className="button__accordion" type="button" onClick={onToggle}>
        <span className="accordion__picto">{active ? '—' : '+'}</span>
        {title}
      </button>
      <div className={`answer_wrapper ${active ? 'open' : ''}`}>
        <div className="accordion__date">{date}</div>
        <div className="accordion__job">{job}</div>
        <div className="accordion__content" dangerouslySetInnerHTML={createMarkup()} />
        {/* Show tools if not empty */}
        {toolsAvailable && (
          <div>
            <div className="content__skills--title">Outils utilisés</div>
            <div className="accordion__tools">{tools}</div>
          </div>
        )}
      </div>
    </li>
  );
}

AccordionContent.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default AccordionContent;
