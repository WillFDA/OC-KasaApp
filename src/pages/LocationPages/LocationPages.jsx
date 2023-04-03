import React from "react";
import { useParams } from "react-router-dom";
import data from '../../Data/annonces.json';
export default function LocationPages() {
    const { id } = useParams();
    const location = data.find((item) => item.id === id);
    console.log(location)
    console.log(id)
    return(
        <>
        </>
    )
}