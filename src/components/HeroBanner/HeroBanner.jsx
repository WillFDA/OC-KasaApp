import React from "react";
import './_herobanner.scss'

export default function HeroBanner(props) {
    return(
    <div className='hero'>
        <h1 className='hero__title'>{props.text}</h1>
        <img src={props.image} alt="Home" className='hero__img' />
      </div>
    )
}