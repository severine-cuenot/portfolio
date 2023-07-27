import works from '../../data/works';
import OneWork from './oneWork';

import './style.scss';

function Works() {
  const devArray = works.filter((dev) => dev.type === 'Dev');
  const intArray = works.filter((int) => int.type === 'Int');
  const divArray = works.filter((divers) => divers.type === 'Divers');
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
      <section>
        <h2 className="section__subtitle">Divers</h2>
        <ul className="works_list">
          {divArray.map((divers) => (
            <OneWork
              key={divers.id}
              work={divers}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Works;
