import CircleDesign from "./icons/circleDesign";
import CircleDesign2 from "./icons/circleDesign2";
import MailIcon from "./icons/mailIcon";
import PlusIcons2 from "./icons/plusIcons2";
import SendIcon2 from "./icons/sendIcon2";

const Subscribe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="relative flex items-center max-w-full px-6 mx-auto mt-28 md:mt-40 sm:px-10 lg:px-32 w-fullScreen gap-11"
      data-aos="fade-up"
    >
      <div className="px-3 md:px-10 w-[1170px] h-[350px] md:h-[407px] mx-auto max-w-full flex flex-col items-center justify-center gap-14 md:gap-12 lg:gap-20 bg-[#DFD7F9] bg-opacity-20 rounded-[20px] rounded-tl-[80px] md:rounded-tl-[130px] relative">
        <h2 className="text-base md:text-2xl lg:text-[33px] font-Poppins text-text-clr text-center font-semibold lg:leading-[54px]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>
        <form
          className="h-[40px] md:h-[68px] mb-6 lg:mb-0 max-w-full flex flex-wrap justify-center gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-[420px] max-w-full h-full bg-white rounded-xl flex items-center gap-4 px-7 overflow-hidden shadow-2xl shadow-gray-200">
            <MailIcon />
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-full text-base font-medium tracking-wider bg-transparent outline-none md:text-xl font-Poppins"
            />
          </div>
          {/* 201.65deg, #747DEF 10.27%, #5E3BE1 100% */}
          <button className="w-[150px] sm:w-[180px] h-[40px] md:h-[68px] text-white bg-gradient-to-b from-[#FF946D] to-[#FF7D68] rounded-xl font-semibold font-sans text-base sm:text-[18px] shadow-2xl shadow-gray-200">
            Subscribe
          </button>
        </form>

        <span className="absolute left-0 md:left-10 bottom-0 -z-[1]">
          <CircleDesign />
        </span>
        <span className="absolute right-0 top-0 -z-[1]">
          <CircleDesign2 />
        </span>
        <span className="absolute -right-4 md:-right-6 -top-4 md:-top-6 z-[1]">
          <SendIcon2 />
        </span>
      </div>

      <span className="absolute right-8 -bottom-16 -z-[2]">
        <PlusIcons2 />
      </span>
    </section>
  );
};

export default Subscribe;
