import Page from '../../components/Page';
import Accordion from '../../components/Accordion';

function Experience() {
  return (
    <Page>
      <section className="section">
        <header className="section__header">
          <h1 className="section__title">Expérience</h1>
        </header>
        <p>
          Pour connaître le détail des tâches qui m'ont été confiées
          au fil des ans, cliquez sur le nom des entreprises pour lesquelles
          j'ai travaillé.
        </p>
        <Accordion />
      </section>
    </Page>
  );
}

export default Experience;
