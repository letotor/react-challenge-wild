import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const  Contact = ({name, tel, email ,isDeletable})=>{
    console.log(`${name} ${tel} ${email} ${isDeletable}`)
   return(
        <Fragment className="friend-item">
            <h3>{name}</h3>
            <h4>{tel}</h4>
            <h4>{email}</h4>
            {isDeletable &&<button>suppression</button>}
        </Fragment>
   )
}

export default Contact;
