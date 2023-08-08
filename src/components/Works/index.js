<<<<<<< HEAD
import { Link } from 'react-router-dom';
import works from '../../data/works';
import OneWork from './oneWork';
import Button from '../Button';
=======
import works from '../../data/works';
import OneWork from './oneWork';
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529

import './style.scss';

function Works() {
  const devArray = works.filter((dev) => dev.type === 'Dev');
  const intArray = works.filter((int) => int.type === 'Int');
<<<<<<< HEAD
  // const divArray = works.filter((divers) => divers.type === 'Divers');
=======
  const divArray = works.filter((divers) => divers.type === 'Divers');
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
  return (
    <div>
      <section>
        <h2 className="section__subtitle">Développement</h2>
        <ul className="works_list">
          {devArray.map((dev) => (
            <OneWork
              key={dev.id}
              work={dev}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="section__subtitle">Intégration</h2>
        <ul className="works_list">
          {intArray.map((int) => (
            <OneWork
              key={int.id}
              work={int}
            />
          ))}
        </ul>
      </section>
<<<<<<< HEAD
      {/* <section>
=======
      <section>
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
        <h2 className="section__subtitle">Divers</h2>
        <ul className="works_list">
          {divArray.map((divers) => (
            <OneWork
              key={divers.id}
              work={divers}
            />
          ))}
        </ul>
<<<<<<< HEAD
      </section> */}
      <Link to="/contact"><Button label="Me contacter_" type="button" /></Link>
=======
      </section>
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
    </div>
  );
}

export default Works;
