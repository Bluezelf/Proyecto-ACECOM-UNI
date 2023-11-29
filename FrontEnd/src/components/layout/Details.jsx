import {AcStats } from "../custom/index"
import PropTypes from "prop-types";
import CustomStatsGetter from "../../utils/CustomStatsGetter";

const Details = ({socketsInfo}) => {
  return (
    <section className="hidden md:flex acBox flex-col justify-evenly md:col-span-4 lg:col-span-1 lg:row-span-3">
      <h1 className="acBox__title lg:mb-4">Details</h1>
      <AcStats stats={CustomStatsGetter(socketsInfo.temperature, socketsInfo.humidity, socketsInfo.date)}/>
    </section>
  );
};

Details.propTypes = {
  socketsInfo: PropTypes.object,
};

export default Details;
