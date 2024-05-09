import logo from "../assets/logo.png"
const Nav = () => {
    return (
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
    );
};

export default Nav;