/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Page from '../../components/Page';

import './style.scss';

function About() {
  return (
    <Page>
      <section className="section">
        <header className="section__header">
          <h1 className="section__title">Remerciements</h1>
        </header>
        <div className="section__box--avatar">
          <img src="../../img/patrick_liberty_facing_right.png" alt="Patrick le canard en plastique" className="section__box--avatar-img" />
        </div>
        <div className="section__box--text">
          <p className="section__text">Cependant, j'ai vite atteint des limites dans mes compétences et mon entreprise ne pouvait pas me proposer une formation plus poussée. J'ai alors pris la décision de me reconvertir.</p>
        </div>
        <Link to="/"><Button label="Retour à l'accueil_" type="button" /></Link>
      </section>
    </Page>
  );
}

export default About;
