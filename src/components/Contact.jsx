import React from "react";
import { Fragment } from "react/cjs/react.production.min";

// const name="toto";
// const tel="toto";
// const email="toto@gmail.com";

const  Contact = (props)=>{
    console.log(`${props.name} ${props.tel} ${props.email}`)
   return(
        <Fragment>
            <h3>{props.name}</h3>
            <h4>{props.tel}</h4>
            <h4>{props.email}</h4>
            <button>Suppresion</button>
        </Fragment>
   )
}

export default Contact;
