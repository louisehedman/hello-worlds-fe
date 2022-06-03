import React from 'react';
import { useState } from "react";
import { Range, getTrackBackground } from 'react-range';

const AdvancedSearch: React.FC = () => {
    const tempStep = 1;
    const distanceStep = 5000;
    const tempMin = 44;
    const tempMax = 737;
    const distanceMin = 40000000;
    const distanceMax = 5000000000;
    const [tempValues, setTempValues] = useState([44, 737]);
    const [distanceValues, setDistanceValues] = useState([40000000, 5000000000]);
    
    return (
    <div className="container my-3">
     <div className="card">
     <div className="card-body w-75 m-auto">
     <h2 className="card-title my-3">Advanced search</h2>
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
            height: "42px",
            width: "42px",
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
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
            height: "42px",
            width: "42px",
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
    </div>
    )
}

export default AdvancedSearch;

/*<label htmlFor="tempRange" className="form-label">Temp Range</label>
      <input type="range" className="form-range" min={tempMin} max={tempMax} id="temp-Range"/>*/
