import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Range, getTrackBackground } from "react-range";
import { API_URL } from "../reusable/urls";
import { Link } from "react-router-dom";
import toCelsius from "../helpers/KelvinConverter";

const Destinations: React.FC = () => {
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
    };
    fetchPlanets();
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center text-white">Destinations</h1>
      <div className="card bg-black rounded mb-4 border border-white bg-opacity-75 text-center text-white">
        <div className="card-body w-75 m-auto">
          <h2 className="card-title my-3 text-warning">Sort By</h2>
          <h3 className="card-subtitle mt-2 mb-3">Temperature</h3>
          <Range
            values={tempValues}
            step={tempStep}
            min={tempMin}
            max={tempMax}
            onChange={(tempValues) => {
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
                  width: "100%",
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
                      max: tempMax,
                    }),
                    alignSelf: "center",
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
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginBottom: "30px", float: "left" }}>
            {toCelsius(tempValues[0]) + " °C"}
          </output>
          <output style={{ marginBottom: "30px", float: "right" }}>
            {toCelsius(tempValues[1]) + " °C"}
          </output>
          <h3 className="card-subtitle mt-4 mb-3">Distance from Earth</h3>
          <Range
            values={distanceValues}
            step={distanceStep}
            min={distanceMin}
            max={distanceMax}
            onChange={(distanceValues) => {
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
                  width: "100%",
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
                      max: distanceMax,
                    }),
                    alignSelf: "center",
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
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginBottom: "30px", float: "left" }}>
            {distanceValues[0] + " km"}
          </output>
          <output style={{ marginBottom: "30px", float: "right" }}>
            {distanceValues[1] + " km"}
          </output>
        </div>
      </div>
      <h2 className="my-3 text-center text-warning">Matching Planets</h2>
      <ul className="list-unstyled">
        {planets.map((planet: any) => {
          if (
            planet.avgTemp >= tempValues[0] &&
            planet.avgTemp <= tempValues[1] &&
            planet.earthDistance >= distanceValues[0] &&
            planet.earthDistance <= distanceValues[1]
          ) {
            return (
              <div key={planet._id} className="card mt-2 bg-black rounded mb-4 border border-white bg-opacity-75 text-center text-white">
                <li className="mt-2" >
                  <h3>{planet.name}</h3>
                  <img
                    className="img-fluid"
                    src={`/images/${planet.name}.jpg`}
                    alt={"picture of " + planet.name}
                    width="10px"
                    style={{
                      width: "auto",
                      height: "250px",
                    }}
                  />
                  <p className="w-75 m-auto">{planet.shortDescription}</p>
                  <p className="mt-3">Temperature: {toCelsius(planet.avgTemp)} °C</p>
                  <p>Distance: {planet.earthDistance} km</p>
                  <Link to={"/planet/" + planet.name}>
                    <button className="p-1 mx-1 my-3 btn btn-success">
                      Find out more about {planet.name}
                    </button>
                  </Link>
                </li>
              </div>
            );
          } else return null;
        })}
      </ul>
    </div>
  );
};

export default Destinations;
