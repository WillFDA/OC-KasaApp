import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../Data/annonces.json';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
export default function LocationPages() {
    const { id } = useParams();
    const location = data.find((item) => item.id === id);
    

    return(
        <>
        <ImageSlider location={location} />
        </>
    )
}