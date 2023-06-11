/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.scss';

function ContactForm() {
  return (

  // {info.isDisplayed && (
  //   <>
  //     <p className="info">{info.msg}</p>
  //     <Link to="/">
  //       <Button label="Retourner à l'accueil" />
  //     </Link>
  //   </>
  // )}
  // {!info.isDisplayed
  // && (
    <form className="form" id="formulaire">
      {/* {isError && <Error msg={errorMsg} />} */}
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
      <div className="form__field">
        <label htmlFor="email">Votre nom&nbsp;*</label>
        <Input
          name="fullname"
          type="text"
          required
          placeholder="Votre nom..."
          aria-label="Saisissez votre nom"
          id="fullname"
        />
      </div>
      <div className="form__field">
        <label htmlFor="email">Votre message&nbsp;*</label>
        <textarea
          name="message"
          required
          placeholder="Votre message..."
          aria-label="Saisissez votre message"
          id="message"
          rows="5"
          // onChange={handleChange}
        />
      </div>
      <Button isSubmit label="Envoyer le message" />
    </form>
  );
}
//   );
// }

export default ContactForm;
