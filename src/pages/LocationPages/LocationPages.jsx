import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../Data/annonces.json';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { ReactComponent as Star } from "../../assets/star.svg";
import Dropdown from "../../components/Dropdown/Dropdown";




export default function LocationPages() {
    const { id } = useParams();
    const location = data.find((item) => item.id === id);
    

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index + 1}
                style={{
                    fill: index + 1 <= rating ? '#FF6060' : "#E3E3E3",
                    marginRight: "2px"
                }}
            />
        ));
    };


    return(
        <>
        <ImageSlider location={location} />
        <main className="container">
            <section className="information">
                <div className="information__left">
                    <h1 className="information__title">{location.title}</h1>
                    <p className="information__subtitle">{location.location}</p>
                    <div className="information__tags">
                        {location.tags.map((tags) =>(
                            <span key={tags + location.id} className="information__tags--item">{tags}</span>
                        ))}
                    </div>
                </div>
                <div className="information__right">
                    <div className="information__host">
                        <h2 className="information__host--name">{location.host.name}</h2>
                        <div className="information__host--box">
                            <img className="information__host--img" src={location.host.picture} alt={location.host.name} />
                        </div>
                    </div>
                    <div className="information__rating">
                    {renderStars(location.rating)}
                    </div>
                </div>
            </section>
            <section className="dropdown__container">
                <Dropdown title='Description' content={location.description} />
                <Dropdown title='Équipements' content={location.equipments} />
            </section>

        </main>
        </>
    )
}