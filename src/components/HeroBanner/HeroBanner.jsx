import React from "react";
import './_herobanner.scss'

export default function HeroBanner(props) {
    return(
    <div className={props.classes.container}>
        {props.text && <h1 className='hero__title'>{props.text}</h1>}
        <img src={props.image} alt="Home" className={props.classes.img} />
      </div>
    )
}