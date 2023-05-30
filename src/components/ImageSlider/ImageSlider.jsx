import React, {useState, useEffect} from "react";
import './_imageSlider.scss';
import { ReactComponent as RightArrow } from '../../assets/rightarrow.svg';
import { ReactComponent as LefttArrow } from '../../assets/leftarrow.svg';

export default function ImageSlider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = props.location;
    const [count, setCounter] = useState(1);
    useEffect(() => {
        if(currentIndex < 0) {
            setCurrentIndex(location.pictures.length - 1);
            setCounter(location.pictures.length);
        } else if (currentIndex >= location.pictures.length) {
            setCurrentIndex(0);
            setCounter(1);
        }
    }, [currentIndex, location.pictures.length])

    function handlePreviousClick() {
        setCurrentIndex(currentIndex - 1)
        setCounter(count - 1)
    }

    function handleNextClick() {
        setCurrentIndex(currentIndex + 1)
        setCounter(count + 1)
    }

    return (
        <div className="slider">
            {location.pictures.length > 1 && (
                <div className="slider__arrows">

                    <LefttArrow onClick={handlePreviousClick} className="slider--left" />
                    <p className="slider--counter">{`${count}/${location.pictures.length}`}</p>
                    <RightArrow  onClick={handleNextClick} className="slider--right"/>
                </div>  
            )}
            <img src={location.pictures[currentIndex]} alt={location.title} className="slider__img" />
        </div>
    )
}