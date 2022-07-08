import React, { CSSProperties } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles/index.scss';

import App from './App';
import mystore from './redux/store.js'

//for stylish notifications
import { ToastContainer } from 'react-toastify';


// Create a React root for the supplied container(here container named as root) and return the root.
//The root can be used to render a React element into the DOM with render().
//window.store=mystore;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystore}>
     <ToastContainer />
        <App />      
  </Provider>
);


