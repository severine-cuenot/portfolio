import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Page from 'src/components/Page';
import Button from '../../components/Button';

import './style.scss';

function Home() {
  const [dateState, setDateState] = useState(new Date());
  // Add 2 months to current date
  const months = 2;
  dateState.setMonth(dateState.getMonth() + months);

  // Refresh DOM every 10 min
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 600000);
  }, []);

  return (
    <Page>
      <section className="section">
        <div className="section__blocks">
          <div className="section__block--left">
            <article>
              <div className="hello__typing">
                <div className="hello__text">Hello World.</div>
              </div>
              <h2 className="section__my-name">
                Séverine Cuenot<br />
                <span>Développeuse Web</span>
              </h2>
              <div className="timer">
                <Link to="/contact" className="timer__link">
                  &#9654; Disponible à partir du
                  {' '} {/* add a space */}
                  {dateState.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}.
                </Link>
              </div>
              <p className="section__text">
                A l'origine illustratrice et secrétaire de rédaction web,
                j'ai entrepris une reconversion professionnelle pour suivre
                ma nouvelle passion pour le web. J'aspire à rejoindre une entreprise dynamique
                et bienveillante qui me permettra de renforcer mes compétences, mais aussi
                de continuer à apprendre, encore et toujours.
              </p>
              <p className="section__text">
                Après avoir développé mes compétences en intégration web en autodidacte
                pendant des années, j'ai récemment suivi une formation intensive
                de 5 mois en Fullstack JS, spécialisation React.js. Désormais, je souhaite
                poursuivre mon parcours en me concentrant sur le Front-end, car mon amour pour
                tout ce qui est graphique - le CSS en particulier (le CSS, c'est la vie ♥) -
                est demeuré intact.
              </p>
              <Link to="/parcours"><Button label="En savoir plus_" type="button" /></Link>
              <div className="section__logo">
                <a href="https://github.com/severine-cuenot" target="_blank" rel="noreferrer"><img src="../../img/github-mark-white.png" alt="Aller vers mon profil Github" /></a>
                <a href="https://www.linkedin.com/in/severine-cuenot/" target="_blank" rel="noreferrer"><img src="../../img/linkedin2.png" alt="Aller vers mon profil Linkedin" /></a>
              </div>
            </article>
          </div>
          <div className="section__block--right">
            <aside>
              <img src="../../img/nine_liberty.png" className="section__block--right--img" alt="Nine" />
            </aside>
          </div>
        </div>
        <div className="section__testi">
          <div className="section__testi-content">
            <p className="section__testi-text">
              "J’ai eu le plaisir de travailler avec Séverine entre 2010 et 2018.
              Pendant ces années, j’ai pu faire l’expérience de ses
              immenses qualités professionnelles [...] et ai particulièrement apprécié son envie
              d’apprendre, sa grande capacité de travail, sa flexibilité, son sérieux,
              sa motivation et son sens de l’organisations."
            </p>
            <p className="section__testi-name">
              Cécile C., Rédactrice en chef aux Publications Agora jusqu’en 2018
            </p>
          </div>
          <div className="section__testi-content">
            <p className="section__testi-text">
              "Rigoureuse, flexible, dotée d'un sens avéré des responsabilités et
              appréciée par l'ensemble de l'équipe, Séverine est une salariée compétente
              et indispensable au bon fonctionnement de notre structure."
            </p>
            <p className="section__testi-name">
              Jeanne-Marie S., Directrice Marketing aux Publications Agora jusqu’en 2019
            </p>
          </div>
          <div className="section__testi-content">
            <p className="section__testi-text">
              "Reco de LCL"
            </p>
            <p className="section__testi-name">
              Lay-Chan L., Directrice Marketing aux Publications Agora
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Home;
