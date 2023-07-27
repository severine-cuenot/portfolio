import { useState } from 'react';
import experiences from '../../data/experiences';
import AccordionContent from './accordionContent';

import './style.scss';

function Accordion() {
  // console.log(experiences);
  const [clicked, setClicked] = useState('0');
  // eslint-disable-next-line consistent-return
  const handleToggle = (id) => {
    if (clicked === id) {
      return setClicked('0');
    }
    setClicked(id);
  };

  return (
    // <div className="container">
    <ul className="accordion_list">
      {experiences.map((experience) => (
        <AccordionContent
          key={experience.id}
          experience={experience}
          onToggle={() => handleToggle(experience.id)}
          active={clicked === experience.id}
        />
      ))}
    </ul>
    // </div>
  );
}

export default Accordion;
