import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';
// import store from 'src/Store';

const rootReactElement = (
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider> //
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
