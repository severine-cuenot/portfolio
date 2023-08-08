import Page from '../../components/Page';
import ContactForm from './ContactForm';

import './style.scss';

function Contact() {
  // hashing email in many parts to avoid spam robots, with the help of Safe Brand website
  const emailPart1 = 'severine.cuenot.dev';
  const emailPart2 = 2 ** 6;
  const emailPart3 = String.fromCharCode(emailPart2);
  const emailPart4 = 'gmail.com';
  const emailPart5 = emailPart1 + String.fromCharCode(emailPart2) + emailPart4;
  const emailLink = `mailto:${emailPart5}`;
  const emailText = emailPart1 + emailPart3 + emailPart4;

  return (
    <Page>
      <section className="section">
        <header className="section__header">
          <h1 className="section__title">Contact</h1>
        </header>
        <p className="contact__text">
          Si vous souhaitez me contacter, vous pouvez
          m'écrire à <a href={emailLink} className="link">{emailText}</a> ou bien remplir le formulaire ci-dessous.
        </p>

<<<<<<< HEAD
        <div className="contact__blocks">
          <div className="contact__block--left">
            <ContactForm />
          </div>
          <div className="contact__block--right">
            <aside className="contact__img-container">
              <img src="../../img/nine_plume.png" className="contact__block--right--img" alt="Nine" />
=======
        <div className="section__blocks">
          <div className="section__block--left">
            <ContactForm />
          </div>
          <div className="contact__block--right">
            <aside>
              <img src="../../img/nine_liberty.png" className="contact__block--right--img" alt="Nine" />
>>>>>>> e0283fa52cfe44c35e768e0ace20cff3746a0529
            </aside>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Contact;
