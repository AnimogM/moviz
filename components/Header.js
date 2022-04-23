import HeaderItems from "./HeaderItems"
import { BsLightningCharge } from "react-icons/bs";
import {
  BiBadgeCheck,
  BiCollection,
  BiHome,
  BiSearch,
  BiUser,
} from "react-icons/bi";

export const Header = () => {
    const items = [
      {
        title: "home",
        icon: <BiHome />,
      },
      {
        title: "trending",
        icon: <BsLightningCharge />,
      },
      {
        title: "verified",
        icon: <BiBadgeCheck />,
      },
      {
        title: "collections",
        icon: <BiCollection />,
      },
      {
        title: "search",
        icon: <BiSearch />,
      },
      {
        title: "account",
        icon: <BiUser />,
      },
    ];
  return (
    <div className="flex md:flex-row flex-col justify-between items-center p-5 space-y-2">
      <div className="flex justify-center items-center md:space-x-6">
        {items.map((item) => (
          <HeaderItems key={item.title} {...item} />
        ))}
      </div>
      <div className="text-3xl lg:text-5xl text-white font-semibold tracking-widest">
        M<span className="text-green-300 font-mono">o</span>v
        <span className="text-red-300 font-mono">i</span>z
      </div>
    </div>
  );
}