import { ReactNode, createContext, useState } from "react";

const Context = createContext<{
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

export const Provider = ({ children }: { children: ReactNode }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Context.Provider
      value={{
        searchedValue,
        setSearchedValue,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Context
