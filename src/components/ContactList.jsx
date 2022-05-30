import React from "react";
import Contact from "./Contact";
 



// 1. populate the following array with the correct data
const contactInfo = [
  {
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: '552312354',
    isDeletable: true,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: false,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: false,
  },
  {
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '234983499',
    isDeletable: true,
  },
  {
    name: 'Marie',
    email: 'marie@email.com',
    phone: '238942384',
    isDeletable: false,
  },
  {
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '934584875',
    isDeletable: true,
  },
];


const ContactList= ({persons})=>{

   return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
        {contactInfo.map((person, index) => (
          <Contact 
            key={index}
            name={person.name}
            email={person.email}
            phone={person.phone}
            isDeletable={person.isDeletable}
          />
        ))}

      </div>
    </div>
  );
}

export default ContactList;