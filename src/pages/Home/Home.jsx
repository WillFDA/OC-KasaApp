import React from 'react';
import './_home.scss'
import home_image from '../../assets/hero_img.png'
import data from '../../Data/annonces.json';
import LocationCard from '../../components/LocationCard/LocationCard';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
export default function Home() {
  return (
    <>
    <main className='container'>
      <HeroBanner image={home_image} text={'Chez vous, partout et ailleurs'} />
      <section className='location__container'>
        {data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </section>
    </main>
    </>
  );
};
  