import SatelliteIcon from "./components/icons/satelliteIcon";
import PlaneIcon from "./components/icons/planeIcon";
import MicIcon from "./components/icons/micIcon";
import SettingIcon from "./components/icons/settingIcon";
import SquareIcon from "./components/icons/squareIcon";
import SwimIcon from "./components/icons/swimIcon";
import TaxiIcon from "./components/icons/taxiIcon";

export const services = [
  {
    title: "Calculated Weather",
    info: "Built Wicket longer admire do barton vanity itself do in it.",
    Icon: SatelliteIcon,
  },
  {
    title: "Best Flights",
    info: "Engrossed listening. Park gate sell they west hard for the.",
    Icon: PlaneIcon,
  },
  {
    title: "Local Events",
    info: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    Icon: MicIcon,
  },
  {
    title: "Customization",
    info: "We deliver outsourced aviation services for military customers",
    Icon: SettingIcon,
  },
];

export const destinations = [
  {
    city: "Rome, Italy",
    price: "$5,42k",
    trip: 10,
    image: "/images/rome.png",
  },
  {
    city: "London, UK",
    price: "$4.2k",
    trip: 12,
    image: "/images/london.png",
  },
  {
    city: "Full Europe",
    price: "$15k",
    trip: 28,
    image: "/images/europe.png",
  },
];

export const tripSteps = [
  {
    title: "Choose Destination",
    Icon: SquareIcon,
  },
  {
    title: "Make Payment",
    Icon: SwimIcon,
  },
  {
    title: "Reach Airport on Selected Date",
    Icon: TaxiIcon,
  },
];
