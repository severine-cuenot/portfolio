/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { sendMessage, initSucces, changeValue } from '../../actions';
import './style.scss';

function ContactForm2() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initSucces());
  }, []);

  // Listen to textarea in case someone is typing
  const handleChange = (event) => dispatch(changeValue(event.target.value, 'message'));
  // Listen to submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendMessage());
  };

  // const succes = useSelector((state) => state.user.succes);

  return (
    <div>
      {/* {succes.isDisplayed && (
      <>
        <p className="info">{succes.message}</p>
        <Link to="/">
          <Button label="Retourner à l'accueil" />
        </Link>
      </>
      )}
      {!succes.isDisplayed
    && ( */}
      <form onSubmit={handleSubmit} className="form" id="formulaire">
        <p className="form__warning">
          Les champs avec * sont obligatoires
        </p>
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
            onChange={handleChange}
          />
        </div>
        <Button className="button__form" isSubmit label="Envoyer le message_" />
      </form>
      {/* )} */}
    </div>
  );
}

export default ContactForm2;
