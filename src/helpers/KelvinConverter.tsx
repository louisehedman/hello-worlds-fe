
const toCelsius = (kelvin: number | undefined) => {
    if (kelvin) {
      return Math.floor(kelvin-273.15);
    }
    return "N/a";

}

export default toCelsius;