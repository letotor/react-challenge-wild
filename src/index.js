import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


 const contact ={name:"Emmanuel", email:"emmanuel@gmail.com",tel:"06060606"}



export const App = (
  // write your React Code here
   



  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>

      <div>
          <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.tel}</h4>
          <button>Suppresion</button>

           <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.tel}</h4>
          <button>Suppresion</button>

           <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.tel}</h4>
          <button>Suppresion</button>

           <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.tel}</h4>
          <button>Suppresion</button>
          
           <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.tel}</h4>
          <button>Suppresion</button>
    </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
