import { useState } from "react";
import ArrowDownIcon from "./icons/arrowDownIcon";
import ArrowUpIcon from "./icons/arrowUpIcon";

const Testimonial = () => {
  const [value, setValue] = useState(0);

  const handleClick = (type: string) => {
    if (type == "next") {
      if (value == 2) return;
      setValue((prev) => prev + 1);
    }
    if (type == "prev") {
      if (value == 0) return;
      setValue((prev) => prev - 1);
    }
  };

  // EXTRACTING THE CARD CLASS BECAUSE OF TOO MANY CONTENTS
  const returnAnimatedClass = (index: number) => {
    return `w-[450px] max-w-full min-h-[235px] text-text-clr bg-white rounded-xl font-Poppins tracking-wide shadow-xl shadow-gray-200 absolute duration-700 transition-all ${
      value === index
        ? "z-10 right-0 top-0"
        : `-z-[${index == 2 ? "0" : ""}] -right-5 top-10 md:-right-10 md:top-20`
    }`;
  };

  return (
    <section className="relative flex flex-col items-center justify-between max-w-full gap-16 pl-10 pr-4 mx-auto sm:pr-10 xl:flex-row w-fullScreen xl:gap-0 lg:pl-32 mt-52 xl:items-start">
      <div>
        <h2 className="subtitle" data-aos="fade-up">
          Testimonials
        </h2>
        <h1 className="title" data-aos="fade-up">
          What people say <br /> about Us.
        </h1>

        <div
          className="flex items-center justify-center mt-12 md:mt-20 xl:justify-start gap-7"
          data-aos="fade-up"
        >
          <span
            className={`w-3 h-3 rounded-full duration-300 transition-all ${
              value === 0 ? "bg-[#39425D]" : "bg-[#E5E5E5]"
            }`}
          ></span>
          <span
            className={`w-3 h-3 rounded-full duration-300 transition-all  ${
              value === 1 ? "bg-[#39425D]" : "bg-[#E5E5E5]"
            }`}
          ></span>
          <span
            className={`w-3 h-3 rounded-full duration-300 transition-all  ${
              value === 2 ? "bg-[#39425D]" : "bg-[#E5E5E5]"
            }`}
          ></span>
        </div>
      </div>

      <div className="w-full xl:w-auto" data-aos="fade-up">
        <div className="flex flex-col justify-center w-full gap-0 pr-6 md:pr-0 md:flex-row md:gap-10">
          <div className="relative w-[500px] min-h-[350px] md:min-h-0 max-w-full">
            <article className={returnAnimatedClass(0)}>
              <div className="relative w-full h-full p-4 md:p-10">
                <img
                  src="/images/user1.png"
                  alt="user image"
                  className="w-12 md:w-[68px] h-12 md:h-[68px] object-cover rounded-full absolute -top-6 -left-6"
                />
                <h4 className="font-medium tracking-wide">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h4>
                <h3 className="mt-8 mb-1 font-semibold text-[18px]">
                  Mike Taylor
                </h3>
                <h4 className="font-medium">Lahore, Pakistan</h4>
              </div>
            </article>
            <article className={returnAnimatedClass(1)}>
              <div className="relative w-full h-full p-4 md:p-10">
                <img
                  src="/images/user2.jpg"
                  alt="user image"
                  className="w-12 md:w-[68px] h-12 md:h-[68px] object-cover rounded-full absolute -top-6 -left-6"
                />
                <h4 className="font-medium tracking-wide">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Amet, illum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Unde, cupiditate!”
                </h4>
                <h3 className="mt-8 mb-1 font-semibold text-[18px]">
                  Chris Thomas Joy
                </h3>
                <h4 className="font-medium">CEO of Red Button</h4>
              </div>
            </article>
            <article className={returnAnimatedClass(2)}>
              <div className="relative w-full h-full p-4 md:p-10">
                <img
                  src="/images/user3.jpg"
                  alt="user image"
                  className="w-12 md:w-[68px] h-12 md:h-[68px] object-cover rounded-full absolute -top-6 -left-6"
                />
                <h4 className="font-medium tracking-wide">
                  “Libero ea totam vel natus atque aperiam voluptate eligendi
                  consequuntur ex. Totam minus, temporibus cumque doloribus
                  dolores eligendi officiis nesciunt esse eum.”
                </h4>
                <h3 className="mt-8 mb-1 font-semibold text-[18px]">
                  Rose Davies
                </h3>
                <h4 className="font-medium">New York, USA</h4>
              </div>
            </article>
          </div>
          <div className="md:ml-12 h-[300px] pb-64 md:pb-0 flex-row md:flex-col flex justify-center gap-28 md:gap-14">
            <button
              className="-rotate-90 md:rotate-0"
              onClick={() => handleClick("prev")}
            >
              <ArrowUpIcon value={value} />
            </button>
            <button
              className="-rotate-90 md:rotate-0"
              onClick={() => handleClick("next")}
            >
              <ArrowDownIcon value={value} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
