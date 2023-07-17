import Page from '../../components/Page';
import Works from '../../components/Works';

import './style.scss';

function Realisations() {
  return (
    <Page>
      <section className="section">
        <header className="section__header">
          <h1 className="section__title">Réalisations notables</h1>
        </header>
        <Works />
      </section>
    </Page>
  );
}

export default Realisations;
