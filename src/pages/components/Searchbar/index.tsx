import Search from "../../../assets/icons/search.svg?react";
import HamburgerMenu from "../../../assets/icons/hamburger-menu.svg?react";
import Input from "../../../components/UI/Input";
import CardRow from "../../../components/CardRow";
import LayoutContext from "../../context";
import { useContext } from "react";
import { Menu } from "../../../components";

const Searchbar = () => {
  const { setIsSidebarOpen } = useContext(LayoutContext);
  return (
    <CardRow className="flex h-14 items-center px-2">
      <HamburgerMenu
        onClick={() => {
          setIsSidebarOpen((prevState) => !prevState);
        }}
        className="text-text md:hidden"
      />
      <div className=" ml-2 flex flex-grow items-center">
        <Search />
        <Input
          placeholder="search here..."
          className="border-none font-light !shadow-none focus-visible:border-none"
        />
      </div>
      <Menu items={[
        { label: "Sort A-Z", callback: () => {} },
        { label: "Sort Z-A", callback: () => {} },
        { label: "Sort Due Date", callback: () => {} },
        { label: "Reset Sort", callback: () => {} },
        
        ]} />
    </CardRow>
  );
};

export default Searchbar;
