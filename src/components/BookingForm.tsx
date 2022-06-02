import axios from "axios";
import React, { useEffect, useState } from "react";
import { TripInterface } from "../interfaces/interfaces";
import { API_URL, CREATE_TRIP } from "../reusable/urls";

// Props destination + distance
const BookingForm: React.FC = () => {
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
      travTime: Math.floor(558000000 / 28000),
      destination: "6297c9afa81b73af9480f196",
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
        className="w-50 m-auto"
        onSubmit={(e) =>
          handleSubmit(e, API_URL(CREATE_TRIP("628f362b9c0dad6d50c16e24")))
        }
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
          <div>
            <label>Choose class:</label>
            <label htmlFor="firstClass">1st class</label>
            <input
              // className="form-control radio"
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
              // className="form-control radio"
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
          <div>
            <label>Seating preference:</label>
            <label htmlFor="window">Window</label>
            <input
              // className="form-control radio"
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
              // className="form-control radio"
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
              // className="form-control radio"
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
            className="btn btn-light"
            type="submit"
            value="Send application"
          />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
