import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact'
import './style.css';


//  const contact ={name:"Emmanuel", email:"emmanuel@gmail.com",tel:"06060606"}


export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
      <div>
         <Contact name="JEan" tel="0606062206" email ="jean.d@gmail.com"/>
         <Contact name="Marc" tel="060160606" email ="sdd.d@gmail.com"/>
         <Contact name="toto" tel="0602260606" email ="ff.d@gmail.com"/>
         <Contact name="lucie" tel="06060606" email ="fe.d@gmail.com"/>
         <Contact name="lena" tel="060260606" email ="ee.d@gmail.com"/>
      </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
