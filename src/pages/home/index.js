import Page from 'src/components/Page';
import Block from 'src/components/Block';
import Container from '../../components/Container';

import './style.scss';
import Button from '../../components/Button';

function Home() {
  return (
    <Page>
      <Container>
        <section className="main">
          <Block className="main__block">
            <h1 className="home__welcome--title">
              Hello World_
            </h1>
            <h2 className="home__name">
              Séverine Cuenot<br />
              <span>Développeuse Web</span>
            </h2>
            <p className="home__content">
              Illustratrice de formation, j’ai découvert par hasard que le CSS,
              c’était trop bien. Du coup, j’ai fait une formation intensive de 6&nbsp;mois
              en Fullstack JS avec spécialisation en Front & React.js.
            </p>
            <p className="home__content">
              En reconversion professisonnelle,
              je cherche désormais à consolider cette certitude que le Front,
              c’est encore mieux que le CSS tout seul.
            </p>
            <Button label="En savoir plus_" type="button" />
          </Block>
          <Block className="home__img--block">
            <img src="../../img/nine_liberty.png" alt="Nine" className="home__img" />
          </Block>
        </section>
      </Container>
    </Page>
  );
}

export default Home;
