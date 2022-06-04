import React from 'react';

import { TripInterface } from '../interfaces/interfaces'
import Trip from './Trip';

interface Props {
  tripList: Array<TripInterface> | undefined;
}

const TripList: React.FC<Props> = ({ tripList }) => {
  
  return (
    <section>
      <h2>{tripList === undefined || tripList?.length === 0 ? "You have no applications yet" : "Your applications"}</h2>
      <div className="d-flex">
        {tripList && tripList?.map((trip: TripInterface) => (
          <Trip trip={trip} />
        ))}
      </div>
    </section>
);
}

export default TripList;