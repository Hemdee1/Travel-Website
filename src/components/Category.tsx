import { services } from "../data";
import PlusIcons from "./icons/plusIcons";

const Category = () => {
  return (
    <section className="relative max-w-full px-6 mx-auto -mt-10 text-center sm:px-20 md:mt-10 w-fullScreen">
      <h2 className="subtitle" data-aos="fade-up">
        CATEGORY
      </h2>
      <h1 className="title" data-aos="fade-up">
        We Offer Best Services
      </h1>
      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {services.map((service, index) => {
          const { title, info, Icon } = service;

          return (
            <article
              data-aos="fade-up"
              key={index}
              className="w-[260px] h-[280px] sm:h-[314px] rounded-[36px] bg-white flex flex-col items-center px-4 sm:px-9 transition-shadow duration-500 hover:shadow-2xl shadow-gray-100 gap-6 justify-center relative group"
            >
              <div className="relative w-[140px] h-[100px] flex justify-center items-center">
                <span className="absolute top-2 right-16 w-[50px] h-[50px] bg-[#FFF1DA] rounded-tr-2xl rounded-bl-2xl"></span>
                <span className="relative z-10">
                  <Icon style="h-[125px]" />
                </span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl mb-4 text-[#1E1D4C]">
                  {title}
                </h3>
                <h5 className="font-semibold tracking-wider text-text-clr font-Poppins">
                  {info}
                </h5>
              </div>

              <span className="absolute -z-[1] left-[70px] bottom-[70px] bg-[#DF6951] w-[100px] h-[100px] rounded-tl-[30px] rounded-br-[10px] transition-all duration-500 group-hover:-left-[30px] group-hover:-bottom-[30px]"></span>

              <span className="absolute inset-0 rounded-[36px] bg-white -z-[1]"></span>
            </article>
          );
        })}
      </div>

      <span className="absolute right-0 -z-[2] -top-20 md:top-0 md:right-20">
        <PlusIcons />
      </span>
    </section>
  );
};

export default Category;
