import { useContext } from "react";

// ** assets
import { HamburgerIcon, SearchIcon } from "@assets/icons";

// ** components
import { Menu, CardRow, Input } from "@components";

// ** locals
import LayoutContext from "../../context";

const Searchbar = () => {
  const { setIsSidebarOpen } = useContext(LayoutContext);
  return (
    <CardRow className="flex h-14 items-center px-2">
      <HamburgerIcon
        onClick={() => {
          setIsSidebarOpen((prevState) => !prevState);
        }}
        className="text-text md:hidden"
      />
      <div className=" ml-2 flex flex-grow items-center">
        <SearchIcon />
        <Input
          placeholder="search here..."
          className=" w-full border-none font-light !shadow-none focus-visible:ring-transparent"
        />
      </div>
      <Menu
        items={[
          { label: "Sort A-Z", callback: () => {} },
          { label: "Sort Z-A", callback: () => {} },
          { label: "Sort Due Date", callback: () => {} },
          { label: "Reset Sort", callback: () => {} },
        ]}
      />
    </CardRow>
  );
};

export default Searchbar;
