import React, { useEffect, useState } from "react";
import axios from "axios";

import { TripInterface } from "../../../interfaces/interfaces";
import { API_URL } from "../../../helpers/urls";
import { Props } from "./SuperAwesomeButton";

const BookingForm: React.FC<Props> = ({
  destination,
  distanceToEarth,
  setApplicationSent,
}) => {
  const [state, setState] = useState<TripInterface>({
    destination: undefined,
    passengers: undefined,
    seat: "Window",
    travTime: undefined,
    firstClass: true,
  });

  useEffect(() => {
    setState({
      ...state,
      travTime: distanceToEarth
        ? Math.floor(distanceToEarth / 28000)
        : undefined,
      destination: destination,
    });
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    boolValue?: boolean
  ) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: boolValue !== undefined ? boolValue : value,
    });
    console.log(value);
    console.log(boolValue);
  };

  const handleSubmit = async (e: React.SyntheticEvent, url: string) => {
    e.preventDefault();
    try {
      let tripDetails = state;
      let res = await axios.patch(url, tripDetails, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("res: ", res);
      if (res.status === 200) {
        if (setApplicationSent !== undefined) setApplicationSent(true);
        console.log(res);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        className="w-90 m-auto text-black"
        onSubmit={(e) => handleSubmit(e, API_URL("create-trip"))}
      >
        <div className="form-group">
          <label htmlFor="passengers">Number of passengers:</label>
          <select
            className="form-control"
            id="passengers"
            name="passengers"
            value={state.passengers}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option selected disabled>
              Choose number of passengers...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="form-group  my-4">
            <label className="d-block">Choose class:</label>
            <label htmlFor="firstClass">1st class</label>
            <input
              className="ms-2 me-4"
              type="radio"
              id="firstClass"
              name="firstClass"
              checked={true === state.firstClass}
              value="true"
              onChange={(e) => {
                handleChange(e, true);
              }}
            />
            <label htmlFor="economy">Economy:</label>
            <input
              className="ms-2 me-4"
              type="radio"
              id="economy"
              name="firstClass"
              checked={false === state.firstClass}
              value="false"
              onChange={(e) => {
                handleChange(e, false);
              }}
            />
          </div>
          <div className="form-group  my-4">
            <label className="d-block text-black">Seating preference:</label>
            <label htmlFor="window">Window</label>
            <input
              className="ms-2 me-4"
              type="radio"
              id="window"
              name="seat"
              checked={"Window" === state.seat}
              value="Window"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label htmlFor="aisle">Aisle</label>
            <input
              className="ms-2 me-4"
              type="radio"
              id="aisle"
              name="seat"
              checked={"Aisle" === state.seat}
              value="Aisle"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label htmlFor="surprise">Surprise me</label>
            <input
              className="ms-2 me-4"
              type="radio"
              id="surprise"
              name="seat"
              checked={"Surprise" === state.seat}
              value="Surprise"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <input
            className="btn btn-outline-success btn-block"
            type="submit"
            value="Send application"
          />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
