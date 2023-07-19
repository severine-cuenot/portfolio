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

        <p className="section__text">Ma découverte du milieu des métiers du web s'est effectuée à la manière d'une aventurière luttant contre une jungle dense pour se frayer un chemin jusqu'au précieux et tant espéré trésor.</p>

        <p className="section__text">Un diplôme de Bande-dessinée et d'Illustration en poche, j'ai tout d'abord tenté ma chance en freelance. Le milieu de l'art étant ce qu'il est, il a fallu que je trouve un emploi “alimentaire” en parallèle pour pouvoir payer ces maudites factures.</p>

        <p className="section__text">M'a alors été donné l'opportunité d'être engagée dans une maison d'édition proposant son contenu en ligne, bien que je n'avais aucune expérience dans ce domaine. J'ai ainsi découvert les métiers d'intégratrice et de secrétaire de rédaction web.</p>

        <p className="section__text">On m'a confié des tâches aussi variées que la mise à jour du Wordpress de l'entreprise, l'intégration des newsletters, des mailings publicitaires, des landings d'abonnement, des bons de commande...</p>

        <p className="section__text">Totalement autodidacte, je me suis plongée avec curiosité dans le HTML et le CSS, deux langages dont je ne connaissais rien et qui se sont avérés hyper enthousiasmants. Petit à petit, j'ai pris mes marques et ai eu envie d'en apprendre toujours plus. Bidouillant ici un blog, là un Wordpress, je me suis rendue compte que le métier de Développeur Web pouvait être une véritable vocation.</p>

        <p className="section__text">Après plus de dix ans à servir mon entreprise, j'ai alors pris la décision de me reconvertir. Armée de ma motivation et muselant cette petite voix terrorisée face à toute idée de changement radical, j'ai fait les démarches auprès de Transition Pro pour obtenir un financement.</p>

        <p className="section__text">Quelques mois plus tard, après une formation aussi intense que passionnante, épanouissante et galvanisante, me voici les yeux brillants d'une envie réelle de me faire une place au soleil... ou en tout cas devant la lumière bleue d'un écran d'ordinateur&nbsp;!</p>

        <Link to="/experience"><Button label="Expérience_" type="button" /></Link>
      </section>
    </Page>
  );
}

export default About;
