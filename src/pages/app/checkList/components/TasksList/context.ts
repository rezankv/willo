import { createContext } from "react";

export default createContext<{
  searchedValue: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchedValue: "",
  setSearchedValue: () => undefined,
});
