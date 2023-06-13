import axios from 'axios';

import { SEND_MESSAGE, sentMsg } from '../actions';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Utilisez le même port que celui sur lequel votre serveur écoute
});

const contactForm = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const { fullname, email, message } = store.getState();
    instance.post('/api/contact', { fullname, email, message })
      .then((response) => {
        store.dispatch(sentMsg(response.data.status));
      })
      .catch((error) => {
        console.error(error); // Gérer les erreurs
      });
  }
  next(action);
};

export default contactForm;
