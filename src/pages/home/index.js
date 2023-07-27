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
                Illustratrice & secrétaire de rédaction web en reconversion professionnelle,
                Séverine aimerait bien trouver un poste dans une entreprise dynamique et bienveillante afin de consolider ses acquis et, surtout, d'apprendre encore et toujours de nouvelles choses.
              </p>
              <p className="section__text">
                Après des années d'intégration web en autodidacte et une formation intensive de 5 mois en Fullstack JS, elle souhaite continuer à faire des belles choses en Front, ayant une appétance particulière pour React.js et le CSS (surtout le CSS &hearts;).  
              </p>
              <p className="section__text">
                (et aussi pour qu'elle sache rendre ce site vachement plus attrayant et badass).  
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
      </section>
    </Page>
  );
}

export default Home;
