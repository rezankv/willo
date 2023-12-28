import { createContext } from "react";

export default createContext<{
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  searchedValue: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
}>({
  setIsSidebarOpen: () => undefined,
  isSidebarOpen: false,
  searchedValue: "",
  setSearchedValue: () => undefined,
});
