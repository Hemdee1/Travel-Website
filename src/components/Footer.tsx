import AppleStore from "./icons/appleStoreIcon";
import FbIcon from "./icons/fbIcon";
import GooglePlayIcon from "./icons/googlePlayIcon";
import InstaIcon from "./icons/instaIcon";
import Logo from "./icons/logo";
import TwitterIcon from "./icons/twitter";

const Footer = () => {
  return (
    <footer className="max-w-full px-10 mx-auto sm:px-24 w-fullScreen mt-52 font-Poppins">
      <div className="flex flex-col items-center justify-between gap-16 xl:flex-row xl:gap-0 xl:items-start">
        <div className="flex flex-col items-center xl:items-start">
          <Logo />
          <p className="mt-5 tracking-wide text-text-clr">
            Book your trip in minute, get full <br />
            control for much longer.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 md:gap-32 xl:gap-16">
          <div>
            <h3 className="text-xl font-bold text-[#080809] mb-8">Company</h3>
            <div className="flex flex-col gap-3 items-start text-text-clr font-medium text-[18px]">
              <button>About</button>
              <button>Careers</button>
              <button>Mobile</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#080809] mb-8">Contact</h3>
            <div className="flex flex-col gap-3 items-start text-text-clr font-medium text-[18px]">
              <button>Help/FAQ</button>
              <button>Press</button>
              <button>Affilates</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#080809] mb-8">More</h3>
            <div className="flex flex-col gap-3 items-start text-text-clr font-medium text-[18px]">
              <button>Airline Fees</button>
              <button>Airline</button>
              <button>Low fare tips</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-7">
            <button>
              <FbIcon />
            </button>
            <button>
              <InstaIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
          </div>
          <h5 className="text-xl font-medium tracking-wide text-center font-Poppins mt-7 text-text-clr">
            Discover our app
          </h5>
          <div className="flex justify-center gap-2 mt-4">
            <button>
              <GooglePlayIcon />
            </button>
            <button>
              <AppleStore />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-20 text-center">
        <p className="font-medium tracking-wider text-text-clr">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
