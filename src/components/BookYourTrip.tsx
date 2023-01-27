import { tripSteps } from "../data";
import BuildingIcon from "./icons/buildingIcon";
import HeartIcon from "./icons/heartIcon";
import LeaveIcon from "./icons/leaveIcon";
import MapIcon from "./icons/mapIcon";
import SendIcon from "./icons/sendIcon";

const BookYourTrip = () => {
  return (
    <section className="relative flex flex-col items-center justify-between max-w-full gap-20 px-8 mx-auto mt-40 xl:gap-0 xl:flex-row w-fullScreen sm:px-32">
      <div className="w-[500px] max-w-full">
        <h2 className="subtitle" data-aos="fade-up">
          Easy and Fast
        </h2>
        <h1 className="title" data-aos="fade-up">
          Book your next trip in 3 easy steps
        </h1>
        <div className="flex flex-col gap-12 mt-8">
          {tripSteps.map((step, index) => {
            const { title, Icon } = step;

            return (
              <article
                data-aos="fade-up"
                key={index}
                className="flex gap-5 text-text-clr font-Poppins"
              >
                <Icon />
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <h5 className="mt-1 font-medium tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Urna, tortor tempus.
                  </h5>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div
        className="px-3 sm:px-6 py-3 sm:py-5 rounded-[26px] shadow-2xl bg-white shadow-gray-300 relative"
        data-aos="fade-up"
      >
        <img src="/images/greece.png" alt="greece" />
        <div className="mt-6 tracking-wider font-Poppins">
          <h1 className="font-bold text-[18px] text-[#080809]">
            Trip To Greece
          </h1>
          <h2 className="flex gap-4 tracking-wide mt-3 font-medium text-[#84829A]">
            <span>14-29 June</span>
            <span>By Robbin joseph</span>
          </h2>
          <div className="flex gap-4 mt-5">
            <button>
              <LeaveIcon />
            </button>
            <button>
              <MapIcon />
            </button>
            <button>
              <SendIcon />
            </button>
          </div>
          <div className="flex items-center justify-between mt-7">
            <h2 className="flex items-center gap-4 mt-3 font-medium text-[#84829A]">
              <BuildingIcon />
              <span>24 people going</span>
            </h2>
            <button>
              <HeartIcon />
            </button>
          </div>
        </div>
        {/* ONGOING MODAL */}
        <article className="px-6 py-5 shadow-2xl shadow-gray-200 bg-white font-Poppins flex absolute bottom-16 gap-4 -right-24 w-[263px] rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-110">
          <img
            src="/images/ongoing.png"
            alt="ongoing"
            className="w-12 h-12 rounded-full"
          />
          <div className="tracking-wide ">
            <h4 className="text-sm font-medium text-[#84829A]">Ongoing</h4>
            <h1 className="font-bold mt-1 text-[18px] text-[#080809]">
              Trip To Rome
            </h1>
            <h5 className="mt-3 text-sm font-semibold tracking-wider">
              <span className="text-[#84829A] mr-1">40%</span>
              <span className="text-[#080809]">completed</span>
            </h5>
            <div className="w-full mt-[10px] rounded-[30px] h-[5px] bg-[#F5F5F5]">
              <span className="w-[60%] h-full bg-[#8A79DF] rounded-[30px] block"></span>
            </div>
          </div>
        </article>
        <span className="absolute -top-6 bg-[#59B1E6] blur-[75px] bg-opacity-50 -z-[2] w-72 h-72 -right-6"></span>
      </div>
    </section>
  );
};

export default BookYourTrip;
