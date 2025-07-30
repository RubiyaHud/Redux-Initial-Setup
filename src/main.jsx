import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import myStore from './store.js';

createRoot(document.getElementById('root')).render(
  // store is a prop name
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
