import React from "react";

const logging = (msg)=>{
    console.log('suppresion')
    alert(`${msg} . Voulez vous confirmer?` );
}
  
const  Contact = ({name, phone, email ,isDeletable})=>{
    // console.log(`${name} ${phone} ${email} ${isDeletable}`)
   return(
        <div className="friend-item">
            <h3>{name}</h3>
            <h4>{phone}</h4>
            <h4>{email}</h4>
            {isDeletable &&<button  onClick={() => logging(`Vous avez cliqué sur ${name}`)}>suppression</button>}
           
        </div>
   )
    }


export default Contact;
