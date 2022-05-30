import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './components/ContactList';
import './style.css';


export const App = (
  // write your HTML code here
  <div>
      <div id="container">
        <ContactList/>
      </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
