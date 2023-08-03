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
          <h1 className="section__title">Parcours</h1>
        </header>
        <div className="section__box--avatar">
          <img src="../../img/avatar.png" alt="portrait" className="section__box--avatar-img" />
        </div>
        <div className="section__box--text">
          <h2 className="section__subtitle">Le début de la route...</h2>
          <p className="section__text">Mon parcours a débuté avec l'obtention d'un diplôme en Illustration/bande-dessinée, et j'ai alors créé ma propre auto-entreprise.</p>

          <p className="section__text">Cependant, le milieu artistique s'est avéré compliqué, ce qui m'a poussé à chercher un emploi alimentaire pour vivre plus sereinement.</p>

          <p className="section__text">C'est ainsi que j'ai saisi l'opportunité d'être engagée par une maison d'édition en ligne, malgré mon manque d'expérience dans ce domaine. J'ai découvert les métiers d'intégratrice et de secrétaire de rédaction web, et me suis vue confier diverses tâches telles que la mise à jour du site WordPress de l'entreprise, l'intégration de newsletters, de mailings publicitaires, de landings et de bons de commande.</p>

          <p className="section__text">Étant totalement autodidacte, j'ai plongé avec curiosité dans l'apprentissage du HTML et du CSS, deux langages qui m'étaient jusqu'alors inconnus mais qui m'ont rapidement passionnée.</p>

          <p className="section__text">Cependant, j'ai vite atteint des limites dans mes compétences et mon entreprise ne pouvait pas me proposer une formation plus poussée. J'ai alors pris la décision de me reconvertir.</p>
        </div>

        <div className="section__box--avatar">
          <img src="../../img/patrick_liberty_facing_right.png" alt="Patrick le canard en plastique" className="section__box--avatar-img" />
        </div>
        <div className="section__box--text">
          <h2 className="section__subtitle">Le changement de cap...</h2>
          <p className="section__text">
            Grâce à Transition Pro, j'ai eu la chance d'intégrer l'Ecole O'Clock en mai 2022 pour une formation Fullstack Javascript, très intensive et se déroulant sur 5 mois en téléprésentiel :
          </p>

          <ul className="section__list">
            <li> Trois mois de formation initiale couvrant les bases solides du HTML, du CSS, de Javascript et du SQL, ainsi que les bonnes pratiques en organisation de travail, en développement mais aussi en sécurité.</li>
            <li> Un mois de spécialisation au choix entre le Front et le Back. Pour ma part, en raison de ma passion pour le graphisme, j'ai naturellement opté pour le Front avec React.</li>
            <li> Le dernier mois était consacré au développement d'un projet professionnel en équipe, présenté lors du passage du Titre Professionnel.</li>
          </ul>

          <p className="section__text">La formation s'est achevée en octobre 2022 et j'ai repris mon poste dans mon entreprise actuelle pour préparer en parallèle l'examen, prévu début 2023. </p>

          <p className="section__text">Examen passé avec succès et surtout une grande fiertéé&nbsp;! Je suis actuellement détentrice du dévévé-ème, plus officiellement appelé "Titre Professionnel Développeur Web et Web modile" de niveau&nbsp;III.</p>

          <h2 className="section__subtitle">Des projets à foison...</h2>

          <p className="section__text">Aujourd'hui, je cherche à consolider mes acquis et à approfondir mes nouvelles connaissances. Ce domaine me fascine et il est frustrant de se sentir limitée face à un champ d'expertise aussi vaste&nbsp;!</p>

          <p className="section__text">Je suis donc à la recherche d'un poste à temps plein au sein d'une entreprise qui me donnera la chance d'explorer pleinement cette nouvelle expérience de vie. </p>

          <p className="section__text">Je suis également déterminée à me perfectionner en matière d'accessibilité, un sujet qui me tient particulièrement à cœur et dont je n'ai pour le moment découvert que le sommet de l'iceberg. </p>

          <p className="section__text">Malgré ma reconversion, je reste profondément attachée à mes passions premières : l'illustration, l'écriture, la photographie et les créations au crochet. J'espère pouvoir les exploiter d'autant plus grâce à la création de sites internet dédiés à ces domaines. </p>

          <p className="section__text">Et, qui sait, peut-être que mon obsession inavouable pour l'aquariophilie me donnera elle aussi une raison de perfectionner mes compétences de développeuse... toutes les excuses sont bonnes pour allier travail et passion&nbsp;! </p>

          <div className="section__testi">
            <div className="section__testi-content">
              <p className="section__testi-text">
                "J’ai eu le plaisir de travailler avec Séverine entre 2010 et 2018.
                Pendant ces années, j’ai pu faire l’expérience de ses
                immenses qualités professionnelles et ai particulièrement apprécié son envie
                d’apprendre, sa grande capacité de travail, sa flexibilité, son sérieux,
                sa motivation et son sens de l’organisation."
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
                "Curieuse, responsable, rigoureuse, très impliquée et naturellement dotée d’un esprit
                critique, Séverine est un élément moteur qui aime
                s’investir dans de nouveaux projets. Dotée d’un fort esprit d’équipe, elle a également
                toujours su travailler en parfaite autonomie et responsabilité tout au long de ses
                missions. Elle était particulièrement appréciée par ses collègues et sa direction pour son
                implication, sa disponibilité et son apport quant à la formation/transmission auprès de
                ses pairs."
              </p>
              <p className="section__testi-name">
                Lay-Chan L., Directrice des Opérations & Marketing Tech aux Publications Agora
              </p>
            </div>
          </div>
          <Link to="/experience"><Button label="Expérience_" type="button" /></Link>
        </div>
      </section>
    </Page>
  );
}

export default About;
