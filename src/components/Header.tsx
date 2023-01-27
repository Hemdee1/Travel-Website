import { useEffect, useState } from "react";
import Decore from "./decore";
import Logo from "./icons/logo";

// APLLY A SHADOW
// shadow-2xl shadow-gray-200

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(false);
  };

  // CLOSE MOBILE NAV ON CLICK ON ANY POSITION ON WINDOW
  useEffect(() => {
    const closeNav = (e: MouseEvent) => {
      const target = e.target as Element;

      if (!toggle) return;
      if (
        target.classList.contains("toggle") ||
        target.parentElement?.classList.contains("toggle")
      ) {
        return;
      } else {
        setToggle(false);
      }
    };
    window.addEventListener("click", closeNav);

    return () => window.removeEventListener("click", closeNav);
  }, [toggle]);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center w-full h-20 transition-all duration-500 sm:h-24">
      {/* red background on header */}
      <span className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden bg-white">
        <Decore />
      </span>
      <div
        className={
          "w-fullScreen mx-auto z-50 max-w-full px-8 sm:px-20 flex justify-between items-center relative"
        }
      >
        <Logo />
        <nav
          className={`toggle absolute top-[50px] sm:top-[60px] xl:top-0 w-[250px] xl:w-auto xl:right-0 xl:flex-row xl:bg-transparent xl:h-auto p-10 xl:p-0 h-screen flex-col xl:relative flex items-start xl:items-center gap-10 xl:gap-14 transition-all duration-500 overflow-hidden text-[#212832] font-semibold font-sans shadow-2xl sm:shadow-none shadow-gray-100 ${
            toggle ? "right-0" : "-right-[260px]"
          }`}
        >
          <button
            onClick={handleClick}
            className="transition-colors duration-300 hover:text-[#DF6951]"
          >
            Destinations
          </button>
          <button
            onClick={handleClick}
            className="transition-colors duration-300 hover:text-[#DF6951]"
          >
            Hotels
          </button>
          <button
            onClick={handleClick}
            className="transition-colors duration-300 hover:text-[#DF6951]"
          >
            Flights
          </button>
          <button
            onClick={handleClick}
            className="transition-colors duration-300 hover:text-[#DF6951]"
          >
            Bookings
          </button>
          <button
            onClick={handleClick}
            className="transition-colors duration-300 hover:text-[#DF6951]"
          >
            Login
          </button>
          <button
            onClick={handleClick}
            className="px-5 py-2 border border-[#212832] rounded-md transition-colors duration-300 hover:text-[#DF6951] hover:border-[#DF6951]"
          >
            Sign up
          </button>
          <select className="bg-transparent outline-none cursor-pointer transition-colors duration-300 hover:text-[#DF6951]">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ge">GE</option>
          </select>

          {/* red background on dropdown nav on mobile screens */}
          <span className="absolute top-0 right-0 z-[-2] bg-white w-full h-full block xl:hidden"></span>
          <span className="absolute top-0 right-0 z-[-1] w-[800px] h-[800px] overflow-hidden block xl:hidden">
            <Decore />
          </span>
        </nav>

        {/* TOGGLE */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="toggle xl:hidden"
        >
          <span
            className={`block w-6 h-1 bg-black transition-all  ${
              toggle ? "rotate-[45deg] translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 mt-1 bg-black transition-all ${
              toggle ? "translate-x-8 opacity-[0]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 mt-1 bg-black transition-all  ${
              toggle ? "rotate-[-45deg] -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
