import React from 'react';
import { useState, useEffect } from "react";
import { Range, getTrackBackground } from 'react-range';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from '../reusable/urls';

const AdvancedSearch: React.FC = () => {
    const tempStep = 1;
    const distanceStep = 5000;
    const tempMin = 44;
    const tempMax = 737;
    const distanceMin = 40000000;
    const distanceMax = 5000000000;
    const [tempValues, setTempValues] = useState([44, 737]);
    const [distanceValues, setDistanceValues] = useState([40000000, 5000000000]);
    const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        await axios.get(API_URL("planets")).then((response: any) => {
          setPlanets(response.data.planets);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, []);

    
    return (
    <div className="container my-3 bg-black">
     <div className="card bg-black rounded mb-4 border border-success bg-opacity-75 text-center text-white">
     <div className="card-body w-75 m-auto">
     <h2 className="card-title my-3">Advanced search</h2>
     <h3>Temp</h3>
      <Range
      values={tempValues}
      step={tempStep}
      min={tempMin}
      max={tempMax}
      onChange={tempValues => {
        console.log(tempValues);
        setTempValues(tempValues);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%"
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: tempValues,
                colors: ["#ccc", "#548BF4", "#ccc"],
                min: tempMin,
                max: tempMax
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "1.5em",
            width: "1.5em",
            borderRadius: "4px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA"
          }}
        >
          <div
            style={{
              height: "16px",
              width: "5px",
              backgroundColor: isDragged ? "#548BF4" : "#CCC"
            }}
          />
        </div>
      )}
    />
    <h3>Distance</h3>
    <Range
      values={distanceValues}
      step={distanceStep}
      min={distanceMin}
      max={distanceMax}
      onChange={distanceValues => {
        console.log(distanceValues);
        setDistanceValues(distanceValues);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%"
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: distanceValues,
                colors: ["#ccc", "#548BF4", "#ccc"],
                min: distanceMin,
                max: distanceMax
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "1.5em",
            width: "1.5em",
            borderRadius: "4px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA"
          }}
        >
          <div
            style={{
              height: "16px",
              width: "5px",
              backgroundColor: isDragged ? "#548BF4" : "#CCC"
            }}
          />
        </div>
      )}
    />
    </div>
    </div>
    <div className="card">
        <div className="card-body">
            <ul className="list-unstyled">
              {planets.map((planet: any) => {
                  console.log(planet.avgTemp)
                if (
                    planet.avgTemp >= tempValues[0] && 
                    planet.avgTemp <= tempValues[1] &&
                    planet.earthDistance >= distanceValues[0] &&
                    planet.earthDistance <= distanceValues[1]
                    
                ) {
                  return (
                    <li key={planet.id}>
                      <h3>{planet.name}</h3>
                      <p>{planet.shortDescription}</p>
                      <p>{planet.avgTemp}</p>
                      <p>{planet.earthDistance}</p>
                      <Link to={"/planet/" + planet.name}>
                        <button className="p-1 mx-1 my-3 btn btn-outline-success">
                          Find out more about planet
                        </button>
                      </Link>
                    </li>
                  );
                } else return null;
              })}
              </ul>
            </div>
          </div>
    </div>
    )
}

export default AdvancedSearch;

/*<label htmlFor="tempRange" className="form-label">Temp Range</label>
      <input type="range" className="form-range" min={tempMin} max={tempMax} id="temp-Range"/>*/
