import experiences from '../../data/experiences';
import AccordionContent from './accordionContent';

import './style.scss';

function Accordion() {
  // console.log(experiences);
  return (
    <ul>
      {experiences.map((experience) => (
        <AccordionContent key={experience.id} experience={experience} />
      ))}
    </ul>
  );
}

export default Accordion;
