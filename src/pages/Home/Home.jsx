import React from 'react';
import './_home.scss'
import home_image from '../../assets/hero_img.png'
import data from '../../Data/annonces.json';
import LocationCard from '../../components/LocationCard/LocationCard';
export default function Home() {
  return (
    <>
    <div className='hero'>
      <h1 className='hero__title'>Chez vous, partout et ailleurs</h1>
      <img src={home_image} alt="Home" className='hero__img' />
    </div>
    <section className='location__container'>
      {data.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </section>
    </>
  );
};
  