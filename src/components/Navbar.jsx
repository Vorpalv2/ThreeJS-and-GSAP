import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((element) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={element}
            >
              {element}
            </div>
          ))}
        </div>
        <div className="flex item-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
