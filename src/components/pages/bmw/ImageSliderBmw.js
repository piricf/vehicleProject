import React from 'react'
import "./ImageSliderBmw.css"

const ImageSliderBmw = ({goLeft, goRight, x, sliderArr }) => {
    return (
        <div className="bmw-slider">
            {sliderArr.map((item,index) => {
                return (
                    <div className="bmw-slide" key={index} style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default ImageSliderBmw 
