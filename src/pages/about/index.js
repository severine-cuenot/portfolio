/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Page from '../../components/Page';

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
          <p className="section__text">J'ai commencé mon parcours en obtenant un diplôme d'Illustration/bande-dessinée et me suis alors lancée en auto-entreprise.</p>

          <p className="section__text">Seulement le milieu de l'art n'étant pas le plus rémunérateur, j'ai dû partir en quête d'un emploi alimentaire pour pouvoir vivre plus sereinement.</p>

          <p className="section__text">M'a alors été donné l'opportunité d'être engagée dans une maison d'édition proposant son contenu en ligne, bien que je n'avais aucune expérience dans ce domaine. J'ai ainsi découvert les métiers d'intégratrice et de secrétaire de rédaction web.</p>

          <p className="section__text">On m'a confié des tâches aussi variées que la mise à jour du Wordpress de l'entreprise, l'intégration des newsletters, des mailings publicitaires, des landings d'abonnement, des bons de commande...</p>

          <p className="section__text">Totalement autodidacte, je me suis plongée avec curiosité dans le HTML et le CSS, deux langages dont je ne connaissais rien et qui m'ont rapidement passionnée.</p>

          <p className="section__text">Petit à petit, j'ai pris mes marques et ai eu envie d'en apprendre toujours plus. Bidouillant ici un blog, là un Wordpress, je me suis rendue compte que le métier de Développeur Web pouvait être une véritable vocation.</p>

          <p className="section__text">Seulement être autodidacte a ses limites et mon entreprise ne me proposait pas de me former. Après dix ans à la servir, j'ai alors pris la décision de me reconvertir.</p>

          <p className="section__text">Grâce à Transition Pro, j'ai eu la chance de pouvoir rejoindre l'Ecole O'Clock en mai 2022, pour une formation Fullstack Javascript.</p>

          <p className="section__text">Cette formation très intensive se déroulait sur 5 mois en téléprésentiel&nbsp;:</p>
          <ul className="section__list">
            <li>nous avons eu 3 mois de formation socle avec les bases solides du HTML, du CSS, de Javascript, du SQL mais aussi des bonnes pratiques en matière d'organisation de travail, de sécurité ou de développement.</li>
            <li>ensuite, nous avons eu un mois de spécialisation au choix entre le front et le back. Pour ma part, j'ai choisi de m'orienter vers le Front avec REACT.</li>
            <li>Enfin, le dernier mois était consacré au développement d'un projet professionnel en équipe.</li>
          </ul>

          <Link to="/experience"><Button label="Expérience_" type="button" /></Link>
        </div>
      </section>
    </Page>
  );
}

export default About;
