import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const name="toto";
const tel="toto";
const email="toto@gmail.com";

const  Contact = ()=>{
   return(
        <Fragment>
            <h3>{name}</h3>
            <h4>{tel}</h4>
            <h4>{email}</h4>
            <button>Suppresion</button>
        </Fragment>
   )
    
}

export default Contact;
