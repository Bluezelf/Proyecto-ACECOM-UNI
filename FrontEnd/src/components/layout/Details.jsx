import PropTypes from "prop-types";
import { AcStats } from "../custom";
import { getStats } from "../../utils";

const Details = ({socketsInfo}) => {
  
  const temperature = socketsInfo.temperature
  const humidity = socketsInfo.humidity
  const date = socketsInfo.date

  return (
    <section className="hidden md:flex acBox flex-col justify-evenly md:col-span-4 lg:col-span-1 lg:row-span-3">
      <h1 className="acBox__title lg:mb-4">Details</h1>
      <AcStats stats={getStats(temperature, humidity, date)}/>
    </section>
  );
};

Details.propTypes = {
  socketsInfo: PropTypes.object,
};

export default Details;
