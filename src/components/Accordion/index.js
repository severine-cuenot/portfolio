import { useState } from 'react';
import experiences from '../../data/experiences';
import AccordionContent from './accordionContent';

import './style.scss';

function Accordion() {
  // console.log(experiences);
  const [clicked, setClicked] = useState('0');
  const handleToggle = (id) => {
    if (clicked === id) {
      return setClicked('0');
    }
    setClicked(id);
  };

  return (
    <ul>
      {experiences.map((experience) => (
        <AccordionContent
          key={experience.id}
          experience={experience}
          onToggle={() => handleToggle(experience.id)}
          active={clicked === experience.id}
        />
      ))}
    </ul>
  );
}

export default Accordion;
