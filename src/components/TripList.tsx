import React from "react";

import { TripInterface } from "../interfaces/interfaces";
import Trip from "./Trip";

interface Props {
  tripList: Array<TripInterface> | undefined;
}

const TripList: React.FC<Props> = ({ tripList }) => {
  return (
    <section className="container my-3">
      <h2 className="text-center text-warning">
        {tripList === undefined || tripList?.length === 0
          ? "You have no applications yet"
          : "Your applications"}
      </h2>
      <div className="d-flex row justify-content-evenly">
        <div className="card-group">
          {tripList &&
            tripList?.map((trip: TripInterface) => <Trip trip={trip} />)}
        </div>
      </div>
    </section>
  );
};

export default TripList;
