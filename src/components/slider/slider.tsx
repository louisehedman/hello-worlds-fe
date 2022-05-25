import React, { useState } from "react";
import { planets } from "../../helpers/planetArr";
import ImgComp from "../../helpers/ImgComp";
import './slider.css';



function Slider() {

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (planets.length -1)) : setX(x + 100);
    }
    
    const goRight = () => {
        x === -100 * (planets.length -1) ? setX(0) : setX(x - 100);   
    }

    function numberWithSpaces(nr:number) {
        return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className="container px-4 pt-4">
            <h1 className="list">Our Planets</h1>
            <div className="slider">
                
                {
                    planets.map((item: any, index: any) => {
                        return (
                            <div 
                            key={index} 
                            className="slide" 
                            style={{transform: `translateX(${x}%)`}} >
                                <ImgComp src={item.image} />
                                <div className="slideInfo">
                                    <div className="topRight">
                                        <button className="action info">i</button>
                                        <button className="action add">&#43;</button>
                                    </div>

                                    <div className="slideDetails">
                                        <h2>{item.name}</h2>

                                        <div className="bottomRight">
                                            <p><b>Temperature: </b>XYZ °C</p>
                                            <p><b>Distance: </b>{numberWithSpaces(item.distance)} km</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="go left" onClick={goLeft}>&#10094;</button>
                <button className="go right" onClick={goRight}>&#10095;</button>
            </div>
        </div>
    )
}

export default Slider;