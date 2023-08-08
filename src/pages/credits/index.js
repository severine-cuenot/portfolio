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
          <p className="section__text">&#9825; Le menu "burger" en version mobile est accessible, grâce à l'aide précieuse de <a href="https://www.w3.org/" target="_blank" rel="noreferrer" className="link">W3C</a> et <a href="https://codepen.io/Stefany93/post/good-hamburger-navigation" target="_blank" rel="noreferrer" className="link">Stefany Newman</a>.</p>
          <p className="section__text">&#9825; La font utilisée pour la version dysléxique-friendly du site s'appelle OpenDyslexic et a été fournie avec bienveillance par <a href="https://opendyslexic.org/" target="_blank" rel="noreferrer" className="link">Abbie Gonzalez</a>.
          </p>
          <p className="section__text">&#9825; Un immense merci à mes bêta-testeurses qui se sont cramées les yeux sur ce site :D.
          </p>
        </div>
        <Link to="/"><Button label="Retour à l'accueil_" type="button" /></Link>
      </section>
    </Page>
  );
}

export default About;
