import Page from '../../components/Page';

import './style.scss';

function Contact() {
  const emailPart1 = 'severine.cuenot.dev';
  const emailPart2 = 2 ** 6;
  const emailPart3 = String.fromCharCode(emailPart2);
  const emailPart4 = 'gmail.com';
  const emailPart5 = emailPart1 + String.fromCharCode(emailPart2) + emailPart4;
  const emailLink = `mailto:${emailPart5}`;
  const emailText = emailPart1 + emailPart3 + emailPart4;

  return (
    <Page>
      <section>
        <header>
          <h1>Contact</h1>
          <p>
            Si vous souhaitez me contacter, vous pouvez
            m'écrire à <a href={emailLink}>{emailText}</a> ou bien remplir le formulaire ci-dessous.
          </p>

        </header>
      </section>
    </Page>
  );
}

export default Contact;
