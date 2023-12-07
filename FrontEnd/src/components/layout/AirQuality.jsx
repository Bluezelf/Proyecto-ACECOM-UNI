import PropTypes from "prop-types";
import {getColorClass, getShadowClass} from "../../utils";


const AirQuality = ({socketsInfo}) => {
  
  const AirQ = socketsInfo.airquality
  const colorClass = getColorClass(AirQ);
  const shadowClass = getShadowClass(AirQ);

  return (
    <section className="flex h-full lg:h-[69%] acBox col-span-1 flex-col md:row-span-2 lg:row-span-3">
      <h1 className="acBox__title">AirQuality</h1>
      <div className="relative flex justify-center h-full items-center">
        <p className={`text-7xl z-20 absolute font-bold tracking-wide ${colorClass} dark:text-acBox-dark`}>
          {AirQ}
        </p>
        <p className="md:text-sm lg:text-xl font-bold absolute tracking-wider z-20 dark:text-acBox-dark bottom-[40%] md:bottom-1/3 lg:top-[62%]">AQI </p>
        <div
          className={`flex absolute justify-center items-center ${shadowClass} rounded-full animate-spin-slow shadow-md bg-acSmoke w-60 h-60 md:w-0 lg:w-60 lg:h-60 dark:bg-acGray`}
        ></div>
      </div>
    </section>
  );
};

AirQuality.propTypes = {
  socketsInfo: PropTypes.object,
};

export default AirQuality;