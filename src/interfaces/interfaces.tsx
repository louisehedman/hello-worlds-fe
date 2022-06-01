export interface PlanetInterface {
  _id: string | undefined;
  name: string | undefined;
  moons: Array<object> | undefined;
  avgTemp: number | undefined;
  mass: {
    massValue: number | undefined;
    massExponent: number | undefined;
  };
  grav: number | undefined;
  radius: number | undefined;
  earthDistance: number | undefined;
  shortDescription: string | undefined;
  image: string | undefined;
}

export interface TripInterface {
  _id: string | undefined;
  destination: string | undefined;
  travTime: number | undefined;
  departure: string | undefined;
  firstClass: boolean | undefined;
  createdAt: string | undefined;
  planet?: PlanetInterface | undefined;
}

export interface UserInterface {
  _id: string | undefined;
  firstName: string | undefined;
  username: string | undefined;
  email: string | undefined;
  isAdmin: boolean | undefined;
  tripList: Array<TripInterface> | undefined;
}

export interface UserDetailsInterface {
  firstName?: string;
  username?: string;
  email?: string;
  password?: string;
}
