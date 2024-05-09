import logo from "../assets/logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={logo} className="w-[20%] j" />
        <ul className="flex justify-between items-center gap-5 text-lg text-[#3A3740]">
          <a>
            <li>Home</li>
          </a>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>
            <button className="  bg-gradient-to-b from-blue-800 to-blue-500 rounded-full text-white px-8 py-2">
              Log in
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center text-lg mt-10 gap-2">
        <GrHomeRounded />
        <IoIosArrowForward />
        Flashcard <IoIosArrowForward />
        Mathematics <IoIosArrowForward />
        <span className="text-[#06286E] font-bold">Relation & Functions</span>
      </div>
    </div>
  );
};

export default Nav;
