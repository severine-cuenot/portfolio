/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';

import emailjs from 'emailjs-com';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.scss';

function ContactForm() {
  // const dispatch = useDispatch();
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_szuxjkw', 'contact_form', form.current, 'CpWh0jpgfGEz8GguY')
      .then(
        (result) => {
          console.log(result.text);
          alert('SUCCESS!');
        },
        (error) => {
          console.log(error.text);
          alert('FAILED...', error);
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="form" id="formulaire">
        <p className="form__warning">
          Les champs avec * sont obligatoires
        </p>
        {/* Name */}
        <div className="form__field">
          <label htmlFor="name">Votre nom&nbsp;*</label>
          <Input
            name="name"
            type="text"
            required
            placeholder="Votre nom..."
            aria-label="Saisissez votre nom"
            id="fullname"
          />
        </div>
        {/* email */}
        <div className="form__field">
          <label htmlFor="email">Adresse email&nbsp;*</label>
          <Input
            name="email"
            type="email"
            required
            placeholder="Votre adresse e-mail..."
            aria-label="Saisissez votre e-mail"
            id="email"
          />
        </div>
        {/* Subject */}
        <div className="form__field">
          <label htmlFor="subject">Objet&nbsp;*</label>
          <Input
            name="subject"
            type="text"
            required
            placeholder="L'objet de votre message..."
            aria-label="Saisissez l'objet de votre message"
            id="subject"
          />
        </div>
        {/* Message */}
        <div className="form__field">
          <label htmlFor="message">Votre message&nbsp;*</label>
          <textarea
            name="message"
            required
            placeholder="Votre message..."
            aria-label="Saisissez votre message"
            id="message"
            rows="5"
          />
        </div>
        <Button className="button__form" isSubmit label="Envoyer le message_" />
      </form>
    </div>
  );
}

export default ContactForm;
