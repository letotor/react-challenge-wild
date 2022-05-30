import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact'
import './style.css';


//  const contact ={name:"Emmanuel", email:"emmanuel@gmail.com",tel:"06060606"}


export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
      <div>
         <Contact />
         <Contact />
         <Contact />
         <Contact />
         <Contact />
      </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
