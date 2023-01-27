import { destinations } from "../data";
import ArrowIcon from "./icons/arrowIcon";
import DecoreRingIcon from "./icons/decoreRingIcon";

const Destination = () => {
  return (
    <section className="max-w-full px-10 mx-auto mt-40 text-center sm:px-20 w-fullScreen">
      <h2 className="mb-2 subtitle">Top Selling</h2>
      <h1 className="title">Top Destinations</h1>
      <div className="relative flex flex-wrap justify-center mt-16 gap-9">
        {destinations.map((data, index) => {
          const { city, price, trip, image } = data;

          return (
            <article
              key={index}
              className="w-[314px] h-[300px] sm:h-[457px] rounded-3xl shadow-2xl shadow-gray-200 relative transition-all duration-500 hover:scale-105 hover:shadow-gray-300"
            >
              <img
                src={image}
                alt="rome"
                className="w-full h-[95%] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 text-text-clr font-Poppins font-semibold top-auto bg-white h-[90px] sm:h-[130px] px-5 py-3 sm:py-7 rounded-b-3xl">
                <h2 className="w-full flex justify-between text-[15px] sm:text-[18px]">
                  <span>{city}</span>
                  <span>{price}</span>
                </h2>
                <h3 className="flex gap-4 mt-3 text-sm sm:mt-5 sm:text-base">
                  <ArrowIcon /> {trip} Days Trip
                </h3>
              </div>
              {index === destinations.length - 1 && (
                <span className="absolute bottom-6 -right-16 -z-[1]">
                  <DecoreRingIcon />
                </span>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Destination;
