import React from 'react';

import { TripInterface } from '../interfaces/interfaces'
import Trip from './Trip';

interface Props {
  tripList: Array<TripInterface> | undefined;
}


const TripList: React.FC<Props> = ({ tripList }) => {

  console.log(tripList)
  return (
    <section>
      <h2>Your bookings</h2>
      <div className="d-flex">
        {tripList?.map((trip: TripInterface) => (
          <Trip trip={trip} />
        ))}
      </div>
    </section>
);
}

export default TripList;