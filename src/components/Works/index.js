import works from '../../data/works';
import OneWork from './oneWork';

import './style.scss';

function Works() {
  return (
    <ul className="works_list">
      {works.map((work) => (
        <OneWork
          key={work.id}
          work={work}
        />
      ))}
    </ul>
  );
}

export default Works;
