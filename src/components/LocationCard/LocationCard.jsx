import React from "react";
import { Link } from "react-router-dom";
import './_locationCard.scss'

export default function LocationCard({location}) {
    return(
    <Link to={`/location/${location.id}`} className="location-card">
      <h3 className="location-card__title">{location.title}</h3>
      <div className="location-card__img-container">
        <img src={location.cover} alt={location.title} className="location-card__img" />
      </div>
    </Link>
    );
}