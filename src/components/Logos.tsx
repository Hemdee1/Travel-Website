const Logos = () => {
  return (
    <section className="relative flex flex-wrap items-center justify-center max-w-full gap-6 px-10 mx-auto -mt-40 w-fullScreen md:gap-11 lg:px-24 md:mt-40">
      {[...Array(5)].map((_data, index) => (
        <article
          key={index}
          className="px-5 lg:px-5 h-[70px] md:h-[100px] flex items-center bg-white rounded-[30px] transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-gray-100"
        >
          <img
            src={`/images/logo${index + 1}.png`}
            alt="logo"
            data-aos="fade-up"
          />
        </article>
      ))}
    </section>
  );
};

export default Logos;
