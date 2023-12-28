import { useContext } from "react";

// ** assets
import { CloseIcon, HamburgerIcon, SearchIcon } from "@assets/icons";

// ** components
import { Menu, CardRow, Input } from "@components";

// ** hooks
import { useStorage } from "@hooks";

// ** locals
import Context from "../../context";

const Searchbar = () => {
  const { setIsSidebarOpen, setSearchedValue, searchedValue } =
    useContext(Context);
  const { sortTasks } = useStorage();
  return (
    <CardRow className="flex h-14 items-center px-2">
      <HamburgerIcon
        onClick={() => {
          setIsSidebarOpen((prevState) => !prevState);
        }}
        className="text-text md:hidden cursor-pointer"
      />
      <div className=" ml-2 flex flex-grow items-center">
        {searchedValue ? (
          <CloseIcon
            className=" h-5 w-5 cursor-pointer"
            onClick={() => setSearchedValue("")}
          />
        ) : (
          <SearchIcon className="h-4 w-4" />
        )}
        <Input
          onChange={(e) => setSearchedValue(e.target.value || "")}
          placeholder="search here..."
          className="  w-full border-none font-light !shadow-none focus-visible:ring-transparent"
          value={searchedValue}
        />
      </div>
      <Menu
        items={[
          {
            label: "Sort A-Z",
            callback: () => sortTasks("A-Z"),
          },
          { label: "Sort Z-A", callback: () => sortTasks("Z-A") },
        ]}
      />
    </CardRow>
  );
};

export default Searchbar;
