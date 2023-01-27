import PlaneIcon from "./icons/planeIcon";
import PlayIcon from "./icons/playIcon";
import UnderIcon from "./icons/underIcon";

const Hero = () => {
  return (
    <section className="h-[1000px] mx-auto pl-8 pr-8 sm:pr-0 sm:pl-20 max-w-full w-fullScreen flex items-center relative">
      <div className="flex flex-col ml-0 md:ml-10 xl:ml-0 gap-8 z-[1] font-Poppins">
        <h2
          className="font-bold text-[14px] md:text-[18px] text-[#DF6951] uppercase"
          data-aos="fade-up"
        >
          Best Destinations around the world
        </h2>
        <h1
          className="text-[#181E4B] font-Volkhov font-bold text-[38px] md:text-[84px] leading-[70px] md:leading-[89px] relative"
          data-aos="fade-up"
        >
          Travel, enjoy <br />
          and live a new <br />
          and full life
          <span className="absolute top-[50px] md:top-[70px] -z-[1] -left-6 md:left-auto right-auto sm:-right-20">
            <UnderIcon />
          </span>
        </h1>
        <h5
          className="font-semibold text-[14px] md:text-[18px] leading-[30px] text-[#5E6282] tracking-wider"
          data-aos="fade-up"
        >
          Built Wicket longer admire do barton vanity itself do in it. <br />
          Preferred to sportsmen it engrossed listening. Park gate <br /> sell
          they west hard for the.
        </h5>
        <div className="flex flex-col items-start sm:items-center sm:flex-row gap-11">
          <button
            className="py-3 sm:py-5 px-5 sm:px-7 rounded-xl bg-[#F1A501] font-semibold font-sans shadow-xl shadow-[#df695166] text-white text-[15px] sm:text-[18px] transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            Find out more
          </button>
          <button className="flex items-center gap-5 group" data-aos="fade-up">
            <span className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px] rounded-full bg-[#DF6951] flex justify-center items-center shadow-xl shadow-[#df695166] transition-transform duration-300 group-hover:scale-110">
              <PlayIcon />
            </span>
            <span className="text-[#686D77] font-semibold font-sans text-[15px] sm:text-[18px]">
              Play Demo
            </span>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 left-0 xl:left-auto top top-10 md:top-32">
        <div className="relative pr-5" data-aos="fade-up">
          <img
            src="/images/hero.png"
            alt="hero-image"
            className="hidden xl:block"
          />
          <span className="absolute top-16 sm:top-0 left-10">
            <PlaneIcon style="h-[100px] sm:h-[154px]" />
          </span>
          <span className="absolute top-40 sm:top-20 right-0 sm:right-20 xl:right-0 -z-[1]">
            <PlaneIcon style="h-[100px] sm:h-[154px]" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
