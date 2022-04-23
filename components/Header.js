import HeaderItems from "./HeaderItems"
import {FaHome, FaSearch, FaUser, FaBox, FaLightbulb, FaCheckCircle} from "react-icons/fa"

export const Header = () => {
    const items = [
        {
            title: "home",
            icon: <FaHome/>
        },
        {
            title: "trending",
            icon: <FaLightbulb/>
        },
        {
            title: "verified",
            icon: <FaCheckCircle/>
        },
        {
            title: "collections",
            icon: <FaBox/>
        },
        {
            title: "search",
            icon: <FaSearch/>
        },
        {
            title: "account",
            icon: <FaUser/>
        }
    ]
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