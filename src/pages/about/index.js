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
          <h2 className="section__subtitle">Le début de la route...</h2>
          <p className="section__text">J'ai commencé mon parcours en obtenant un diplôme d'Illustration/bande-dessinée et me suis alors lancée en auto-entreprise.</p>

          <p className="section__text">Seulement le milieu de l'art n'étant pas le plus évident, j'ai dû partir en quête d'un emploi alimentaire pour pouvoir vivre plus sereinement.</p>

          <p className="section__text">M'a alors été offert l'opportunité d'être engagée dans une maison d'édition proposant son contenu en ligne, bien que je n'avais aucune expérience dans ce domaine. J'ai ainsi découvert les métiers d'intégratrice et de secrétaire de rédaction web.</p>

          <p className="section__text">On m'a confié des tâches aussi variées que la mise à jour du Wordpress de l'entreprise, l'intégration des newsletters, des mailings publicitaires, des landings d'abonnement, des bons de commande...</p>

          <p className="section__text">Totalement autodidacte, je me suis plongée avec curiosité dans le HTML et le CSS, deux langages dont je ne connaissais rien et qui m'ont rapidement passionnée.</p>

          <p className="section__text">Petit à petit, j'ai pris mes marques et ai eu envie d'en apprendre toujours plus. Bidouillant ici un blog, là un Wordpress, je me suis rendue compte que le métier de Développeur Web pouvait être une véritable vocation.</p>

          <p className="section__text">Seulement être autodidacte a ses limites et mon entreprise ne me proposait pas de me former en ce sens. Après dix ans à la servir, j'ai alors pris la décision de me reconvertir.</p>
        </div>

        <div className="section__box--avatar">
          <img src="../../img/patrick_liberty_facing_right.png" alt="Patrick le canard en plastique" className="section__box--avatar-img" />
        </div>
        <div className="section__box--text">
          <h2 className="section__subtitle">Le changement de cap...</h2>
          <p className="section__text">Grâce à Transition Pro, j'ai eu la chance de pouvoir rejoindre l'Ecole O'Clock en mai 2022, pour une formation Fullstack Javascript.</p>

          <p className="section__text">Cette formation très intensive se déroulait sur 5 mois en téléprésentiel&nbsp;:</p>

          <ul className="section__list">
            <li>Nous avons eu 3 mois de formation socle avec les bases solides du HTML, du CSS, de Javascript, du SQL mais aussi des bonnes pratiques en matière d'organisation de travail, de sécurité ou de développement.</li>
            <li>Ensuite, nous avons eu un mois de spécialisation au choix entre le Front et le Back. Pour ma part, avec ma forte passion pour tout ce qui est visuel, j'ai naturellement choisi de m'orienter vers le Front avec REACT.</li>
            <li>Enfin, le dernier mois était consacré au développement d'un projet professionnel en équipe à présenter lors du passage du Titre Proffessionnel.</li>
          </ul>

          <p className="section__text">La formation a pris fin en octobre 2022 et j'ai alors retrouvé mon poste dans mon entreprise actuelle pour préparer en parallèle le passage de l'examen prévu tout début 2023. </p>

          <p className="section__text">Examen passé avec succès et surtout une grande fiertéé&nbsp;! Je suis actuellement détentrice du dévévé-ème, plus officiellement appelé "Titre Professionnel Développeur Web et Web modile" de niveau&nbsp;III.</p>

          <h2 className="section__subtitle">Des projets à foison...</h2>

          <p className="section__text">Désormais, je cherche à consolider mes acquis mais aussi et surtout à aller bien plus loin dans mes nouvelles connaissances. Ce domaine me fascine et il est très frustrant de se sentir si limitée face à un monde si vaste&nbsp;!</p>

          <p className="section__text">Pour ce faire, je suis à la recherche d'un poste à temps plein dans une entreprise qui saura me donner ma chance pour cette toute nouvelle expérience de vie. </p>

          <p className="section__text">J'ai aussi comme projet/désir de me perfectionner en matière d'accessibilité. Le sujet me touche particulièrement et j'ai pu découvrir lors de mes recherches pour le site présenter à l'examen que là aussi, le champ des possibles était vaste et passionnant. </p>

          <p className="section__text">Par ailleurs, je reste très attachée à mes passions premières que sont l'illustration, la photo et les créations au crochet. J'ai bon espoir de mener à bien mon auto-entreprise via la création de sites internets dédiés à ces premières amours via des sites de vente, entre autre. </p>

          <p className="section__text">Et, qui sait, peut-être que mon obsession pour l'aquariophilie me donnera elle aussi une excuse pour parfaire mes nouvelles attributions de développeuse... toutes les excuses sont bonnes à prendre pour joindre l'agréable à l'agréable&nbsp;! </p>

          <Link to="/experience"><Button label="Expérience_" type="button" /></Link>
        </div>
      </section>
    </Page>
  );
}

export default About;
