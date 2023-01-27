const Logos = () => {
  return (
    <section className="w-fullScreen max-w-full mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-11 px-10 lg:px-24 -mt-40 md:mt-40 relative">
      {[...Array(5)].map((_data, index) => (
        <article
          key={index}
          className="px-5 lg:px-5 h-[70px] md:h-[100px] flex items-center bg-white rounded-[30px] transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-gray-100"
        >
          <img src={`/images/logo${index + 1}.png`} alt="logo" />
        </article>
      ))}
    </section>
  );
};

export default Logos;
