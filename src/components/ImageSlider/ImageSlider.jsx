import React, {useState, useEffect} from "react";
import './_imageSlider.scss';
import { ReactComponent as RightArrow } from '../../assets/rightarrow.svg';
import { ReactComponent as LefttArrow } from '../../assets/leftarrow.svg';

export default function ImageSlider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = props.location;
    useEffect(() => {
        if(currentIndex < 0) {
            setCurrentIndex(location.pictures.length - 1);
        } else if (currentIndex >= location.pictures.length) {
            setCurrentIndex(0)
        }
    }, [currentIndex, location.pictures.length])

    function handlePreviousClick() {
        setCurrentIndex(currentIndex - 1)
    }

    function handleNextClick() {
        setCurrentIndex(currentIndex + 1)
    }

    return (
        <div className="slider">
            <div className="slider__arrows">
                <LefttArrow onClick={handlePreviousClick} className="slider--left" />
                <RightArrow  onClick={handleNextClick} className="slider--right"/>
            </div>  
            <img src={location.pictures[currentIndex]} alt='`Photo ${currentIndex - 1}`' className="slider__img" />
        </div>
    )
}